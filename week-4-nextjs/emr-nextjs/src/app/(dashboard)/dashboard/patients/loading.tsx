export default function LoadingPatients() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-6 w-48 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-64 rounded bg-gray-200 animate-pulse" />
        </div>

        <div className="h-10 w-36 rounded bg-gray-200 animate-pulse" />
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-5 w-40 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
        </div>

        <ul className="divide-y">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex justify-between gap-4 py-4">
              <div className="space-y-2">
                <div className="h-4 w-40 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-32 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-48 rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="flex gap-2">
                <div className="h-8 w-16 rounded bg-gray-200 animate-pulse" />
                <div className="h-8 w-20 rounded bg-gray-200 animate-pulse" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
