'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

export function Bangboosshow() {
    const [bangboosData, setBangboosData] = useState([]);
  console.log(bangboosData)

  const[loading,setLoading]=useState(true);

  useEffect(() => {
      fetchBangboos(); 
  }, []);

  const fetchBangboos = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/bangbooschart`);
          const data = await response.json();
          console.log(data);
          if (response.ok) {
              setBangboosData(data.bangbooscount);
              console.log(data.bangbooscount);
          } 
      console.log(response.bangbooscount);    
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
        labels: bangboosData.map(countganders => countganders.bangboos.bangboos_name),
        datasets: [
          {
            label: 'Bangboos',
            data: bangboosData.map(countganders => countganders.count),
            backgroundColor: [
              'rgba(60, 58, 48, 0.33)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(74, 182, 178, 0.33)',
            ],
            borderColor: [
              'rgba(60, 58, 48, 0.33)',
              'rgba(54, 162, 235, 1)',
              'rgba(74, 182, 178, 0.33)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data} />;
}