export default function Head() {
  const title = "🚀 AI SuperStack Hands-On Program — Learn, Build & Earn with AI in 14 Days"
  const description =
    "Master AI from scratch in Telugu. Join VybeSchool's 14-day AI SuperStack Hands-On Program to explore top tools, build production-ready projects, automate workflows, and launch live AI products with a 100% money-back guarantee."

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/aiss.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/aiss.png" />
    </>
  )
}

