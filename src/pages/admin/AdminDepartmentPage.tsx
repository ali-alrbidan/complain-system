import { Building2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import DepartmentCard from "../../components/admin/cards/DepartmentCard";

const AdminDepartmentPage = () => {
  const departments = [
    { name: "Public Works", employees: 45, complaints: 876 },
    { name: "Sanitation", employees: 32, complaints: 654 },
    { name: "Public Health", employees: 28, complaints: 432 },
    { name: "Transportation", employees: 24, complaints: 234 },
    { name: "Parks & Recreation", employees: 18, complaints: 149 },
  ];

  return (
    <div className=" ">
      <div className="  bg-white rounded-xl sm:mx-16 p-2 py-3 sm:p-12 sm:py-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 max-sm:px-1">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
              Department Management
            </h1>
          </div>
          <Button className=" text-white shadow-sm w-full sm:w-auto">
            <Building2 className="w-4 h-4 mr-2" />
            Add Department
          </Button>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={index}
              name={dept.name}
              employees={dept.employees}
              complaints={dept.complaints}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDepartmentPage;
