import { useState, useMemo, useEffect } from "react";
import { supabase } from "../../supabase/Supabase";

export default function AssessorsDirectory() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [lguFilter, setLguFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "last",
    direction: "asc"
  });
  const [assessors, setAssessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch assessors from Supabase (public or authenticated)
  useEffect(() => {
    const fetchAssessors = async () => {
      console.log("Fetching assessors from Supabase...");
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("assessors")
          .select("*");

        if (error) {
          console.error("Supabase fetch error:", error);
          throw error;
        }

        console.log("Supabase returned data:", data);
        setAssessors(data || []);
      } catch (err) {
        setError("Failed to load assessors: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessors();
  }, []);

  // Reset LGU filter when region changes
  useEffect(() => {
    setLguFilter("");
  }, [regionFilter]);

  // Get unique regions and LGUs for filters
  const { regions, lguOptions } = useMemo(() => {
    const uniqueRegions = [...new Set(assessors.map(a => a.region))]
      .filter(Boolean)
      .sort();

    const filteredLgus = regionFilter
      ? assessors.filter(a => a.region === regionFilter)
      : assessors;

    const uniqueLgus = [...new Set(filteredLgus.map(a => a.lgu))]
      .filter(Boolean)
      .sort();

    return {
      regions: uniqueRegions,
      lguOptions: uniqueLgus
    };
  }, [assessors, regionFilter]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc"
          ? "desc"
          : "asc"
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.target);
    const newAssessor = {
      region: formData.get("region") || "Caraga",
      province: formData.get("province") || "",
      lgu: formData.get("lgu") || "",
      type: formData.get("type") || "Municipality",
      first: formData.get("first-name"),
      mi: formData.get("middle-initial"),
      last: formData.get("last-name"),
      suffix: formData.get("suffix"),
      designation: formData.get("designation"),
      position: formData.get("position"),
      sex: formData.get("sex"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    if (!newAssessor.first || !newAssessor.last) {
      setError("First and Last name are required");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("assessors")
        .insert([newAssessor])
        .select();

      if (error) throw error;

      setAssessors(prev => [...prev, ...data]);
      setSuccess("Assessor added successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to add assessor: " + err.message);
    }
  };

  const filteredData = useMemo(() => {
    let data = assessors
      .filter(a => {
        const searchStr = `${a.first} ${a.last} ${a.lgu} ${a.region}`.toLowerCase();
        return searchStr.includes(search.toLowerCase());
      })
      .filter(a => regionFilter ? a.region === regionFilter : true)
      .filter(a => lguFilter ? a.lgu === lguFilter : true);

    if (sortConfig.key) {
      data = data.sort((a, b) => {
        const valA = a[sortConfig.key]?.toString().toLowerCase() || "";
        const valB = b[sortConfig.key]?.toString().toLowerCase() || "";

        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [assessors, search, regionFilter, lguFilter, sortConfig]);

  const columns = [
    { key: "region", label: "Region" },
    { key: "province", label: "Province" },
    { key: "lgu", label: "LGU" },
    { key: "type", label: "LGU Type" },
    { key: "first", label: "First Name" },
    { key: "mi", label: "MI" },
    { key: "last", label: "Last Name" },
    { key: "suffix", label: "Suffix" },
    { key: "designation", label: "Designation" },
    { key: "position", label: "Position" },
    { key: "sex", label: "Sex" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];

  const formFields = [
    { id: "region", required: true, label: "Region", type: "select", options: ["Region XIII", "BARMM"], required: true, defaultValue: "Region XIII" },
    { id: "province", label: "Province", type: "text", required: true },
    { id: "lgu", label: "LGU", type: "text", required: true },
    { id: "type", label: "LGU Type", type: "select", options: ["Municipality", "City", "Province"], required: true, defaultValue: "Municipality" },
    { id: "first-name", label: "First Name", type: "text", required: true },
    { id: "middle-initial", label: "Middle Initial", type: "text", maxLength: 1 },
    { id: "last-name", label: "Last Name", type: "text", required: true },
    { id: "suffix", label: "Suffix", type: "text" },
    { id: "designation", label: "Designation", type: "text", required: true },
    { id: "position", label: "Position", type: "text", required: true },
    { id: "sex", label: "Sex", type: "select", options: ["", "Male", "Female", "Other"], required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "phone", label: "Phone", type: "tel", required: true },
  ];

  return (
    <div id="directory" className="block">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {success}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-secondary"
              placeholder="Search assessors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary"
            >
              <option value="">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            <select
              value={lguFilter}
              onChange={(e) => setLguFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary"
            >
              <option value="">All LGUs</option>
              {lguOptions.map(lgu => (
                <option key={lgu} value={lgu}>{lgu}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-secondary">
              <tr>
                {columns.map(({ key, label }) => (
                  <th
                    key={key}
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center">
                      {label}
                      {sortConfig.key === key && (
                        <span className="ml-1">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-4 text-center">
                    Loading assessors...
                  </td>
                </tr>
              ) : filteredData.length === 0 ? ( // Check if NO data exists
                <tr>
                  <td colSpan={columns.length} className="px-6 py-4 text-center">
                    No matching assessors found
                  </td>
                </tr>
              ) : (
                filteredData.map((a) => ( // Show data when exists
                  <tr key={a.id} className="bg-white border-b hover:bg-gray-50">
                    {columns.map(({ key }) => (
                      <td key={key} className="px-6 py-4">
                        {a[key] || "-"}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-secondary">
          Add New Assessor
        </h3>
        <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.id}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary"
                  required={field.required}
                  defaultValue={field.defaultValue || ""}
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.id}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary"
                  required={field.required}
                  {...(field.maxLength ? { maxLength: field.maxLength } : {})}
                />
              )}
            </div>
          ))}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg"
            >
              Add Assessor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}