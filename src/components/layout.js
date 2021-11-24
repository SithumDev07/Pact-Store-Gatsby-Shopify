/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import RightArrow from "../components/icons/RightArrowLong"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main className="lg:container xl:w-3/4 mx-auto">{children}</main>
        <footer className="text-gray-50 bg-theme-gray" style={{ height: '400px' }}>
          <div className="container mx-auto pt-8 pb-3 font-Aventra h-full">
            <div className="flex flex-wrap -mx-px overflow-hidden h-full">
              <div className="my-1 px-1 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h1 className="text-2xl font-extrabold">Our Emails are Sustainable, too.</h1>
                    <p className="my-3 lg:text-sm xl:text-base">Get exclusive deals, first dibs on new designs, and easy sustainability ideas delivered paperless to your inbox.</p>
                    <div className="flex items-center px-3 py-3 bg-gray-50 text-theme-gray">
                      <input type="text" name="newsletter" className="bg-transparent flex-1 focus:outline-none" placeholder="Email Address" />
                      <button>
                        <RightArrow width={18} height={18} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <p>© Wear Pact, LLC {new Date().getFullYear()}</p>
                    <Link className="ml-4 hover:underline" to="privacy-policy">Privacy Policy</Link>
                    <Link className="ml-4 hover:underline" to="terms-of-use">Terms of Use</Link>
                    <Link className="ml-4 hover:underline" to="accessibility">Accessibility</Link>
                  </div>
                </div>
              </div>
              <div className="my-1 px-1 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="w-full h-full px-12">
                  <h1 className="text-2xl font-extrabold">"Fit Happens Guarantee"</h1>
                  <p className="my-3 lg:text-sm xl:text-base">If you’re not happy, we’re not happy. <br />
                    Need help? Email us or call us: 800-662-7228 <br />
                    Our Support Team is here to help M-F, 8am-4pm MST.
                  </p>
                </div>
              </div>
              <div className="my-1 px-1 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-3 xl:-mx-3">
                  <div className="w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                    <h2 className="font-extrabold">Company</h2>
                    <ul className="flex flex-col mt-3">
                      <Link className="hover:underline" to="/">Help Center</Link>
                      <Link className="hover:underline" to="/">FAQ</Link>
                      <Link className="hover:underline" to="/">Shipping And Returns</Link>
                      <Link className="hover:underline" to="/">Articles</Link>
                      <Link className="hover:underline" to="/">Give Back, Wear</Link>
                      <Link className="hover:underline" to="/">Forward</Link>
                      <Link className="hover:underline" to="/">Affiliates</Link>
                      <Link className="hover:underline" to="/">Refer A Friend</Link>
                      <Link className="hover:underline" to="/">Catelog Unsubsribe</Link>
                      <Link className="hover:underline" to="/">Stores</Link>
                      <Link className="hover:underline" to="/">Wholesale</Link>
                    </ul>
                  </div>
                  <div className="w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                      <h2 className="font-extrabold">Social</h2>
                      <ul className="flex flex-col mt-3">
                        <a className="hover:underline" href="">Instagram</a>
                        <a className="hover:underline" href="">Facebook</a>
                        <a className="hover:underline" href="">Twitter</a>
                        <a className="hover:underline" href="">YouTube</a>
                      </ul>
                  </div>
                  <p className="text-xs">3200 Carbon Place, Suite 102, Boulder, CO, 80301</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
