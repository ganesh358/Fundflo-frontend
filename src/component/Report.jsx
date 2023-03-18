import { SimpleGrid } from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from "./Chart";
import { Data } from "../Pages/data";


Chart.register(CategoryScale);
 


export default function Report(){
    const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.curdata), 
    datasets: [
      {
        label: "Orders ",
        data: Data.map((data) => data.Orders),
        backgroundColor: ["rgba(75,192,192,1)","&quot;#ecf0f1","#50AF95","#f3ba2f","#2a71d0"],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 

    return (
        <SimpleGrid w='50rem'>
          <BarChart chartData={chartData} />
        </SimpleGrid>
    )
}