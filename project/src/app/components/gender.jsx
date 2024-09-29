'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Gendershow() {
    const [genderData, setGenderData] = useState([]);
  console.log(genderData)

  const[loading,setLoading]=useState(true);

  useEffect(() => {
      fetchGender(); 
  }, []);

  const fetchGender = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/gender`);
          const data = await response.json();
          console.log(data);
          if (response.ok) {
              setGenderData(data.gendercount);
              console.log(data.gendercount);
          } 
      console.log(response.gendercount);    
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
        labels: genderData.map(countganders => countganders.gender.gender_name),
        datasets: [
          {
            label: 'Gender',
            data: genderData.map(countganders => countganders.count),
            backgroundColor: [
              'rgba(7, 0, 254, 0.8)',
              'rgba(252, 0, 208, 0.8)',
            ],
            borderColor: [
              'rgba(39, 34, 198, 0.8)',
              'rgba(222, 51, 191, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data} />;
}