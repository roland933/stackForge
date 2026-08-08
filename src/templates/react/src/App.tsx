const technologies = [
    {
        name: "React",
        description: "UI Library",
        icon: "⚛",
    },
    {
        name: "TypeScript",
        description: "Type Safety",
        icon: "TS",
    },
    {
        name: "Tailwind CSS",
        description: "Styling",
        icon: "✦",
    },
    {
        name: "React Router",
        description: "Routing",
        icon: "◎",
    },
    {
        name: "Zustand",
        description: "State Management",
        icon: "🐻",
    },
];

const project = {
    name: "My Project",
    packageManager: "npm",
    git: true,
};



const nextSteps = [
    {
        icon: "✦",
        title: "Start building",
        description: "Start building your application.",
    },
    {
        icon: "⌘",
        title: "Edit your code",
        description: "Open src/App.tsx and start coding.",
    },
    {
        icon: "▣",
        title: "Explore your project",
        description: "Explore the generated project structure.",
    },
    {
        icon: "🚀",
        title: "Build something awesome",
        description: "Your project is ready to go.",
    },
];

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-100 via-white to-sky-100 px-4 py-8 sm:px-6 sm:py-12">

            {/* Background decorations */}

            <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />

            <div className="pointer-events-none absolute right-1/4 top-20 h-24 w-24 rounded-3xl bg-white/50 rotate-12 blur-sm" />


            {/* Main application container */}

            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-2xl shadow-slate-900/10">


                {/* Content */}

                <main className="px-6 py-10 sm:px-10 sm:py-14">

                    {/* Hero */}

                    <section className="text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-4xl text-white shadow-xl shadow-slate-900/20">
                            ⚒
                        </div>

                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            Stack Forge
                        </h2>

                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                                ✓
                            </span>

                            Project generated successfully!
                        </div>

                        <p className="mt-5 text-lg text-slate-500">
                            Welcome to{" "}
                            <span className="font-semibold text-slate-900">
                                {project.name}
                            </span>
                        </p>

                        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
                            Your project is ready. Everything you need to start
                            building is already configured.
                        </p>

                    </section>


                    {/* Your Stack */}

                    <section className="mt-12">

                        <div className="mb-5">

                            <h3 className="text-xl font-semibold text-slate-950">
                                Your Stack
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Technologies selected for your project.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                            {technologies.map((technology) => (

                                <div
                                    key={technology.name}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                                >

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-lg font-bold text-violet-600">
                                        {technology.icon}
                                    </div>

                                    <h4 className="mt-4 text-sm font-semibold text-slate-950">
                                        {technology.name}
                                    </h4>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {technology.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* What's Next */}

                    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <div>

                            <h3 className="text-xl font-semibold text-slate-950">
                                What's Next?
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Your project is ready. Here's where to start.
                            </p>

                        </div>


                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {nextSteps.map((step) => (

                                <div
                                    key={step.title}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-200 hover:bg-violet-50/40"
                                >

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                                        {step.icon}
                                    </div>

                                    <h4 className="mt-4 text-sm font-semibold text-slate-950">
                                        {step.title}
                                    </h4>

                                    <p className="mt-2 text-xs leading-5 text-slate-500">
                                        {step.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* Footer */}

                    <footer className="pt-10 text-center">

                        <p className="text-sm text-slate-500">
                            Generated by{" "}
                            <span className="font-semibold text-slate-950">
                                Stack Forge
                            </span>
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                            Happy coding! 🚀
                        </p>

                    </footer>

                </main>

            </div>

        </div>
    );
}

export default App;