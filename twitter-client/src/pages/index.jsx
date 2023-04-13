import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <h1>Twitter Home</h1>
    </main>
  );
}

export default Home;