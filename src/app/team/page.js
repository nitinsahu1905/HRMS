"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import $ from 'jquery';
import 'orgchart/dist/css/jquery.orgchart.css';
import 'orgchart/dist/js/jquery.orgchart.js';


const Team = () => {
    
  useEffect(() => {
    const datascource = {
        'name': 'Nisha Mantri',
        'title': 'Project Manager',
        'children': [
          {
            'name': 'Aishwarya Rathore',
            'title': 'Project Manager',
            'children': [
              {
                'name': 'Bheem Singh',
                'title': 'Frontend Developer',
                'children': [
                  { 'name': 'Divyanshi Paliowal', 'title': 'Frontend Developer Intern' },
                  { 'name': 'Lakshya Agarwal', 'title': 'Frontend Developer Intern' },
                  { 'name': 'Priyanshu Mishra', 'title': 'Frontend Developer Intern' }
                ]
              }
            ]
          },
          { 'name': 'Lokesh Goyal', 'title': 'Quality Analyst' },
          { 'name': 'Vinod Sharma', 'title': 'Technical Lead' }
        ]
      };

    $('#chart-container').orgchart({
      'data': datascource,
      'nodeContent': 'title'
    });
  }, []);

  return (
    <div> 
      {/* <Head>
        <title>Org Chart Example</title>
      </Head> */}
      <div id="chart-container" style={{ width: '100%', height: '600px' }}>
      <style jsx>{`
          .orgchart-container .orgchart td.leftLine,
          .orgchart-container .orgchart td.rightLine,
          .orgchart-container .orgchart td.topLine,
          .orgchart-container .orgchart td.bottomLine {
            border: none !important;
          }

          .orgchart-container .orgchart .lines {
            display: none !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Team;
