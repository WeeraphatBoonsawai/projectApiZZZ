'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Rankshow() {
    const [rankData, setRankData] = useState([]);
  console.log(rankData)

  const[loading,setLoading]=useState(true);

  useEffect(() => {
      fetchRank(); 
  }, []);

  const fetchRank = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/rank`);
          const data = await response.json();
          console.log(data);
          if (response.ok) {
              setRankData(data.rankcount);
              console.log(data.rankcount);
          } 
      console.log(response.rankcount);    
      setLoading(false)
      } 
      catch (error) {
          Swal.fire({
              icon: "error",
              text: error,
          });
      }

  }

    const data = {
        labels: rankData.map(countrank => countrank.rank.rank_name),
        datasets: [
          {
            label: 'Rank',
            data: rankData.map(countrank => countrank.count),
            backgroundColor: [
              'rgba(229, 194, 35, 0.8)',
              'rgba(120, 32, 239, 0.8)',
            ],
            borderColor: [
              'rgba(248, 205, 8, 0.8)',
              'rgba(110, 3, 255, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      };

      return <Doughnut data={data} />;
}