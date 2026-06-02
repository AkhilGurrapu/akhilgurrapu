class EducationUtils {
  final String name;
  final String icon;
  final List<String> tool;
  final String description;
  final String title;

  EducationUtils(
      {required this.name,
      required this.icon,
      required this.description,
      required this.title,
      required this.tool});
}

List<EducationUtils> educationUtils = [
  EducationUtils(
    name: 'Southern Illinois University Edwardsville',
    title: 'Master of Science in Computer Management and Information Systems',
    icon: 'assets/imgs/siue.png',
    description:
        "Jan 2022 – Dec 2023  ·  Grade: 3.88  ·  Member, Entrepreneurship Club at SIUE",
    tool: ['Business Intelligence & Analytics', 'Managing the Cloud', 'Database Design', 'Software Systems Design', 'Enterprise Resource Planning (SAP)', 'Project Management', 'Quantitative Analysis', 'Information Systems & Technology'],
  ),
  EducationUtils(
    name: 'Kakatiya Institute of Technology and Science',
    title: 'Bachelor of Technology in Electrical and Electronics Engineering',
    icon: 'assets/imgs/kitsw.jpeg',
    description:
        "2015 – 2019  ·  Grade: 8.12  ·  EEE Association Event Manager · Sumshodini Technical Event Organiser",
    tool: ['Programming in C', 'Object Oriented Programming (C++)', 'Data Structures', 'Entrepreneurship Development', 'AI Technologies in Electrical Engineering', 'Smart Electric Grid'],
  ),
];
