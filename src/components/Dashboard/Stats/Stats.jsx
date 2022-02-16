import Graph from "./Graph/Graph";
import RankingTable from "./RankingTable/RankingTable";

const Stats = () => {
  return (
    <>
      <RankingTable />
      <div>
        <h1>Graphs</h1>
        <div className="container">
          <Graph />
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Stats;
