"use client";

import Link from "next/link";
import { PatientListItem } from "@/types/patient-list-item";
import { User, Phone, MapPin, Pencil, Trash2 } from "lucide-react";

export function PatientCard({
  patient,
  index,
  onEdit,
  onDelete,
}: {
  patient: PatientListItem;
  index: number;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}) {
  return (
    <li>
      <Link href={`/dashboard/medical-records/${patient.id}`} className="block">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-4 hover:bg-gray-50 cursor-pointer">
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-900">
              <User className="h-4 w-4 text-gray-500" />
              <span>{patient.name}</span>
            </div>

            <div className="text-gray-600">
              {patient.age} tuổi - {patient.gender}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>{patient.phone}</span>
              </div>

              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{patient.address}</span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onEdit(index);
              }}
              className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-100"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDelete(index);
              }}
              className="flex items-center gap-1 rounded-md bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}
