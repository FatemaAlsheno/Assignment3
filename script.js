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
      const year = student.year || ""; // Handle missing year data with empty string
      const semester = student.Semester || ""; // Handle missing semester data with empty string
      const program = student["the_Programs"] || ""; // Access with quotes and underscore
      const nationality = student.Nationality || ""; // Handle missing nationality data with empty string
      const college = student.Colleges || ""; // Handle missing college data with empty string
      const studentCount = student["Number_of_students"] || ""; // Access with quotes and underscores
      row.innerHTML = `
        <td>${year}</td>
        <td>${semester}</td>
        <td>${program}</td>
        <td>${nationality}</td>
        <td>${college}</td>
        <td>${studentCount}</td>
      `;
      studentDataElement.appendChild(row);
    });
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
};
           
