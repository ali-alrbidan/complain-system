import { Download, Edit, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
const AdminEmployeePage = () => {
  //@ts-ignore
  const [employees, setEmployees] = useState([
    {
      id: 1,
      username: "john_health",
      email: "john.employee@health.gov",
      role: "Health Inspector",
      department: "Ministry of Health",
      status: "Verified",
      actions: ["Add Notes", "Request Info", "Change Status", "View Reports"],
    },
    {
      id: 2,
      username: "sarah_transport",
      email: "sarah.employee@transport.gov",
      role: "Transport Coordinator",
      department: "Department of Transportation",
      status: "Verified",
      actions: ["Add Notes", "Request Info", "Change Status"],
    },
    {
      id: 3,
      username: "mike_council",
      email: "mike.employee@council.gov",
      role: "City Officer",
      department: "City Council",
      status: "Verified",
      actions: ["Add Notes", "Change Status", "View Reports", "Export Data"],
    },
    {
      id: 4,
      username: "lisa_env",
      email: "lisa.employee@environment.gov",
      role: "Environmental Officer",
      department: "Environmental Department",
      status: "Pending",
      actions: ["Add Notes", "Request Info"],
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === "Verified"
      ? "bg-green-100 text-green-700 hover:bg-green-100"
      : "bg-amber-100 text-amber-700 hover:bg-amber-100";
  };

  return (
    <div className=" ">
      <div className="  bg-white rounded-xl sm:mx-16 p-2 py-3 sm:p-12 sm:py-5">
        {/* Header */}
        <div className="mb-8">
          <div className="flex md:items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-2">
            <div>
              <h1 className="text-lg md:text-2xl font-semibold text-gray-900">
                Employee Management
              </h1>
              <p className="text-gray-500 md:mt-1">
                Manage employees and their permissions
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                <p className="max-md:text-xs">Export Data</p>
              </Button>
              <Button className="gap-2 bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4" />

                <p className="max-md:text-xs"> Add Employee</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {employees.map((employee) => (
            <Card
              key={employee.id}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6 py-2 max-md:py-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Username and Status */}
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {employee.username}
                      </h3>
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                    </div>

                    {/* Email */}
                    <p className="text-sm text-gray-600 mb-1">
                      {employee.email}
                    </p>

                    {/* Role and Department */}
                    <p className="text-sm text-gray-700 mb-4">
                      {employee.role} • {employee.department}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {employee.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          {action}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Edit and Delete Icons */}
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeePage;
