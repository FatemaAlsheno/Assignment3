const studentDataElement = document.getElementById('student-data');

const fetchData = async () => {
  try {
    const response = await fetch('https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100');
    const data = await response.json();

    if (!data || !data.results) {
      throw new Error('Error fetching data from API');
    }

    const students = data.results;
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.year}</td>
        <td>${student.Semester}</td>
        <td>${student["the Programs"]}</td>
        <td>${student.Nationality}</td>
        <td>${student.Colleges}</td>
        <td>${student["Number of students"]}</td>
      `;
      studentDataElement.appendChild(row);
    });
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
};

fetchData();
