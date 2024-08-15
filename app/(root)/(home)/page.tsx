import Auth from "@/components/auth"

const Page = () => {
  const user = false
  if(!user) return <div className="container mx-auto max-w-7xl h-screen"><Auth/></div>
  return (
    <div>Page</div>
  )
}

export default Page