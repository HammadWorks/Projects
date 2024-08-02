import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Header,
  Instruction,
  AboutCards,
  ArticleCards,
  ContentSection,
  ArticalSection,
  DisplayArticals,
  PageIndex,
  SignForm,
  OrganisationForm,
  ProfilePage,
} from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <>
              <Header
                coverHeading="Waste Less, Recycle More: Your Path to Sustainable Living"
                coverContent="Join our community in reducing waste and making a positive impact on
                the planet. Track your waste, find recycling centers, and access
                valuable resources to help you live more sustainably."
                allowLink
              />
              <Instruction />
              <AboutCards />
              <ArticleCards />
            </>
          ),
        },
        {
          path: "resourses",
          element: (
            <>
              <Header
                coverHeading="Explore Resources"
                coverContent="Discover practical tips for composting, reducing single-use plastics, and more."
                coverHeight="short"
                coverImageUrl="/images/article_cover.webp"
              />
              <DisplayArticals />
              <PageIndex index={1} length={12} />
            </>
          ),
        },
        {
          path: "signIn",
          element: <SignForm />,
        },
        {
          path: "Content",
          element: (
            <>
              <Header
                coverHeading="Explore Resources"
                coverContent="Discover practical tips for composting, reducing single-use plastics, and more."
                coverHeight="short"
                coverImageUrl="/images/article_cover.webp"
              />
              <ArticalSection />
              <PageIndex />
            </>
          ),
        },
        {
          path: "profile",
          element: (
            <>
              <ProfilePage />
            </>
          ),
        },
        {
          path: "organisation",
          element: (
            <>
              <OrganisationForm />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

{
  /* <- Home Page -> */
}
{
  /* <Navbar />
      <Header
        coverHeading="Waste Less, Recycle More: Your Path to Sustainable Living"
        coverContent="Join our community in reducing waste and making a positive impact on
            the planet. Track your waste, find recycling centers, and access
            valuable resources to help you live more sustainably."
        allowLink
      />
      <Instruction />
      <AboutCards />
      <ArticleCards />
      <Footer />  */
}

{
  /* Article Page */
}
{
  /* <Navbar />
      <Header
        coverHeading="Explore Resources"
        coverContent="Discover practical tips for composting, reducing single-use plastics, and more."
        coverHeight="short"
        coverImageUrl="/images/article_cover.jpg"
      />
      <ArticalSection />
      <PageIndex />
      <Footer /> */
}

{
  /* Article Display Page */
}
{
  /* <Navbar />
      <Header
        coverHeading="Explore Resources"
        coverContent="Discover practical tips for composting, reducing single-use plastics, and more."
        coverHeight="short"
        coverImageUrl="/images/article_cover.jpg"
      />
      <DisplayArticals />
      <PageIndex index={1} length={12}/>
      <Footer /> */
}

{
  /* SignIn Page */
}
{
  /* <Navbar />
      <SignForm /> */
}
