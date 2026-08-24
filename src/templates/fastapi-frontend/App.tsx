function App() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            React + FastAPI
          </h1>

          <p className="mt-3 text-muted-foreground">
            Happy coding! 🚀
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* API */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground">
                API
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                FastAPI
              </h2>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  URL
                </span>

                <span className="font-medium">
                  localhost:8000
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Status
                </span>

                <span className="font-medium text-green-600">
                  Running
                </span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground">
                Database
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                PostgreSQL
              </h2>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Database
                </span>

                <span className="font-medium">
                  my_project
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Port
                </span>

                <span className="font-medium">
                  5432
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Status
                </span>

                <span className="font-medium text-green-600">
                  Running
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;