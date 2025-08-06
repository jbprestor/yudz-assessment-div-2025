/*  React & Supabase  */
import { useState, useEffect } from 'react';
import { supabase } from './components/supabase/Supabase';

/*  AUTH PAGES  */
import Login from './components/pages/Login';

/*  DASHBOARD PAGES */
import SupervisorDashboard from './components/pages/SupervisorDashboard';
import EmployerDashboard from './components/pages/EmployerDashboard';

/*  TAB NAVIGATION COMPONENTS  */
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/pages/Homepage/PersonSection/HeroSection';
import Credentials from './components/pages/Homepage/Credentials/Credentials';
import ServicesSection from './components/pages/Homepage/ServiceSection/ServiceSection';
import CurrentSection from './components/pages/Homepage/CurrentSection/CurrentSection';
import HomeTab from './components/HomeTab';
import DirectoryTab from './components/pages/DirectoryTab/DirectoryTab';
import SMVTab from './components/pages/SMVProfilingTab/SMVTab';
import QRRPATab from './components/pages/QRRPATab/QRRPATab';

/**************** SMALL COMPONENTS ****************/
function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center text-lg font-medium text-gray-700">
      Loading...
    </div>
  );
}

function AuthGate() {
  return <Login />;
}

export default function App() {
  /**************** AUTH STATE ****************/
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);

  /**************** FETCH USER ROLE ****************/
  const fetchUserRole = async (id) => {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching user role:', error.message);
    } else {
      setRole(data?.role || null);
    }
    setLoading(false);
  };

  /**************** AUTH LISTENER ****************/
  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error getting session:', error.message);
        setLoading(false);
        return;
      }

      if (session?.user) {
        setUser(session.user);
        await fetchUserRole(session.user.id);
      } else {
        setLoading(false);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          await fetchUserRole(session.user.id);
        } else {
          setUser(null);
          setRole(null);
          setLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /**************** TAB STATE ****************/
  const [activeTab, setActiveTab] = useState('home');

  /**************** CONDITIONAL RENDER ****************/
  if (loading) return <LoadingScreen />;
  if (!user) return <AuthGate />;

  if (role === 'supervisor') return <SupervisorDashboard />;
  if (role === 'employer') return <EmployerDashboard user={user} />;

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        setUser={setUser}  // ✅ pass for instant logout
        setRole={setRole}  // ✅ pass for instant logout
      />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <Credentials />
            <ServicesSection />
            <CurrentSection />
            <HomeTab />
          </>
        )}
        {activeTab === 'directory' && <DirectoryTab />}
        {activeTab === 'smv' && <SMVTab />}
        {activeTab === 'qrrpa' && <QRRPATab />}
      </main>

      <Footer />
    </div>
  );
}
