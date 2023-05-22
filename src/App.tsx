import PageContainer from "./modules/smartphoneUi/components/PageContainer/PageContainer";

function App() {
  return (
    <PageContainer
      bottomNavProps={[{ icon: "@", name: "shalom", route: "/shalom" }]}
    />
  );
}

export default App;
