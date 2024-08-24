import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cell">
          <img className="img" src="img\ad1.png" alt="ad1" />
        </div>
        <div className="cell">
          <h1>Welcome to Stara Poshta!</h1>
        </div>
        <div className="cell">
          <img className="img" src="img\ad1.png" alt="ad1" />
        </div>
      </div>
    </>
  );
}
