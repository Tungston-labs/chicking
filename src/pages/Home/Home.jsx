import Hero from "../../components/Hero/index.jsx";
import HomeSections from "../../components/HomeSections/index.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";
import SharedBanner from "../../components/SharedBanner/index.jsx";

const homeBanners = [
  {
    id: "franchise-intro",
    background: "#891b1c",
    backgroundImage: "/images/mapbackground.svg",
    backgroundImageSize: "min(70rem, 86%) auto",
    description:
      "Chicking began year-long celebrations on July 20 as the halal-certified quick service restaurant chain marked its 20th anniversary with an influential run across the globe. Chicking has spread its wings to the Middle East, Europe and Asia and boasts more than 160 outlets worldwide.",

    features: [
      {
        icon: "/images/Ellipse1.svg",
        text: "Global brand recognition with loyal customers in 36+ countries.",
        title: "Global Recognition",
      },
      {
        icon: "/images/group2.svg",
        text: "Full support across operations, marketing, and logistics.",
        title: "Comprehensive Support",
      },
      {
        icon: "/images/Ellipse2.svg",
        text: "100% halal offerings trusted by a growing global consumer base.",
        title: "Halal Certified",
      },
    ],

    title: (
      <>
        Take The <strong>First Step</strong> Toward Owning A
        <br />
        Successful Global{" "}
        <strong>Chicking Franchise.</strong>
      </>
    ),
  },
];

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      {homeBanners.map((banner) => (
        <SharedBanner key={banner.id} {...banner} />
      ))}
      <HomeSections />
    </PageLayout>
  );
};

export default Home;
