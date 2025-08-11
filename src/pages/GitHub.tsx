import { Helmet } from "react-helmet-async";
import { Github } from "lucide-react";

const repos = [
  { name: "RAID", url: "https://github.com/amirnd51/RAID" },
];

const GitHub = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RAI Based AutoLab GitHub Repositories",
    itemListElement: repos.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      url: r.url,
    })),
  };

  return (
    <>
      <Helmet>
        <title>GitHub Repositories | RAI Based AutoLab</title>
        <meta name="description" content="Explore official RAI Based AutoLab GitHub repositories, including RAID." />
        <link rel="canonical" href="/github" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="bg-card text-card-foreground border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl font-bold">GitHub Repositories</h1>
          <p className="mt-2 text-muted-foreground">
            Browse official repositories and open them on GitHub.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section aria-label="Repository list" className="grid gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.url}
              className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md p-2 bg-muted text-muted-foreground">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {repo.name}
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Official GitHub repository
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default GitHub;
