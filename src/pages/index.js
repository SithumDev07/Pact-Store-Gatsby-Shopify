import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FastCo from "../components/icons/Fastco"
import Mensjournal from "../components/icons/Mensjournal"
import Forbes from "../components/icons/Forbes"
import Shape from "../components/icons/Shape"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="text-center mt-10 text-4xl font-extrabold text-theme-gray font-Aventra">
      <h1>Earth's Favorite <sup className="text-sm">TM</sup> Clothing.</h1>
    </div>
    <div className="w-full mt-10 flex justify-center">
      <StaticImage src="../images/Home.jpg" alt="Home Header" />
    </div>
    <div className="w-full mt-16 flex justify-center">
      <StaticImage src="../images/banner.jpg" alt="Home Banner" />
    </div>
    <div className="w-full my-14 flex flex-col items-center font-Aventra text-theme-gray">
      <h1 className="text-4xl font-extrabold">Earth's Favorite <sup className="text-sm">TM</sup> For Everyone.</h1>
      <p className="mt-2 text-xl font-thin">Made with Organic Cotton in a Fair Trade Factory</p>
    </div>
    <div className="flex flex-wrap -mx-3 overflow-hidden">
      <Link to="/new/women" className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/women.jpg" alt="Home Banner" layout="constrained" />
      </Link>
      <Link to="/new/men" className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/men.jpg" alt="Home Banner" layout="constrained" />
      </Link>
    </div>
    <div className="flex flex-wrap -mx-3 overflow-hidden mt-14">
      <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/section1.jpg" alt="Home Banner" layout="constrained" />
      </div>
      <div className="my-3 px-6 w-full overflow-hidden lg:w-1/2 xl:w-1/2 font-Aventra text-theme-gray flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold">Earth's Favorite <sup className="text-sm">TM</sup> Home</h1>
        <p className="text-center my-5 lg:text-sm xl:text-base font-thin">After a long, hard day, the last thing we want to do is snuggle up to synthetic fibers. That’s why we created bedding and bath with only one ingredient: 100% organic cotton. So you can get to scrubbing, snoozing, snoring, and sleeping in; without worrying about irritations, plastics, or pesticides on your skin.</p>
        <Link to="/shop/home" className="px-24 py-2 rounded-md border border-theme-gray hover:bg-theme-gray hover:text-gray-50 transform transition duration-300">Shop Now</Link>
      </div>
    </div>
    <div className="w-full my-14 flex flex-col items-center font-Aventra text-theme-gray">
      <h1 className="text-4xl font-extrabold">Changes Starts With Your Underware.</h1>
      <p className="mt-2 text-xl font-thin">Organic where it matters most.</p>
    </div>
    <div className="flex flex-wrap -mx-3 overflow-hidden">
      <Link to="/women" className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/women-shop.jpg" alt="Home Banner" layout="constrained" />
      </Link>
      <Link to="/men" className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/men-shop.jpg" alt="Home Banner" layout="constrained" />
      </Link>
    </div>
    <div className="flex flex-wrap -mx-3 overflow-hidden mt-14">
      <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
        <StaticImage src="../images/kids.jpg" alt="Home Banner" layout="constrained" />
      </div>
      <div className="my-3 px-6 w-full overflow-hidden lg:w-1/2 xl:w-1/2 font-Aventra text-theme-gray flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold">Earth's Favorite <sup className="text-sm">TM</sup> Kids</h1>
        <p className="text-center my-5 lg:text-sm xl:text-base font-thin">They grow up so fast. But before they do, let’s spend these first years in soft, clean, organic cotton—the kind that doesn’t itch, irritate, or interrupt a great game of hide-and-seek.</p>
        <Link to="/kids" className="px-24 py-2 rounded-md border border-theme-gray hover:bg-theme-gray hover:text-gray-50 transform transition duration-300">Shop Now</Link>
      </div>
    </div>
    <div className="w-full mt-14 flex flex-col items-center font-Aventra text-theme-gray">
      <h3 className="mb-4 uppercase tracking-widest font-extralight">Pact in the press</h3>
      <h1 className="text-3xl font-extrabold">"Sustainable, Environmentally Friendly Clothing"</h1>
      <p className="mt-4 text-base font-thin">&#8212; Forbes</p>
    </div>
    <div className="flex flex-wrap overflow-hidden w-3/5 mx-auto">
      <div className="my-6 px-6 w-1/4 overflow-hidden">
        <Link to="/"><FastCo width={100} height={100} /></Link>
      </div>
      <div className="my-6 px-6 w-1/4 overflow-hidden">
        <Link to="/"><Forbes width={100} height={100} /></Link>
      </div>
      <div className="my-6 px-6 w-1/4 overflow-hidden">
        <Link to="/"><Shape width={100} height={100} /></Link>
      </div>
      <div className="my-6 px-6 w-1/4 overflow-hidden">
        <Link to="/"><Mensjournal width={100} height={100} /></Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
