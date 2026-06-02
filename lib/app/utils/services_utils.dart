class ServicesUtils {
  final String name;
  final String icon;
  final List<String> tool;
  final String description;
  final String title;

  ServicesUtils(
      {required this.name,
      required this.icon,
      required this.description,
      required this.title,
      required this.tool});
}

List<ServicesUtils> servicesUtils = [
  ServicesUtils(
    name: 'Reinsurance Group of America',
    title: 'Senior Snowflake Engineer',
    icon: 'assets/imgs/rga.png',
    description:
        "Senior Snowflake Engineer on the enterprise Platform Team, administering and supporting the Snowflake data platform across multiple environments. Manage end-to-end user access including RBAC design, role hierarchy, grants, onboarding/offboarding and access reviews. Build and maintain platform infrastructure (warehouses, databases, schemas, roles, resource monitors, integrations, network policies) and automate provisioning with Terraform across Dev, QA and Production. Integrate Jenkins-based CI/CD for Snowflake deployments, monitor and tune performance, and drive FinOps cost optimization through credit tracking, warehouse sizing and resource monitors. Administer security controls including masking policies, secure data sharing and audit monitoring.",
    tool: ['Snowflake', 'Terraform', 'Jenkins (CI/CD)', 'RBAC & Access Governance', 'FinOps', 'Resource Monitors', 'Masking Policies', 'DevOps', 'SQL', 'Python'],
  ),
  ServicesUtils(
    name: 'neteffects',
    title: 'Information Management Administrator',
    icon: 'assets/imgs/neteffects.png',
    description:
        "Implemented and managed the Snowflake data platform, leveraging Time Travel, Zero-Copy Cloning and Secure Data Sharing to optimize data operations and governance. Developed and maintained ETL pipelines using dbt and Python, integrated with Jenkins for CI/CD. Utilized Snowflake's AI/ML capabilities, including Snowpark for Python and LLM integration, to enhance analytics and predictive modeling. Designed scalable data models and workflows across multiple warehouses, applied data governance frameworks (Data Catalog, Lineage, Profiling), and supported data users with appropriate access and Enterprise Data Lake integrations.",
    tool: ['Snowflake', 'dbt', 'Python', 'Jenkins', 'Snowpark', 'LLM Integration', 'Data Governance', 'Secure Data Sharing', 'ETL'],
  ),
  ServicesUtils(
    name: 'Southern Illinois University Edwardsville',
    title: 'Information Technology Technical Associate',
    icon: 'assets/imgs/siue.png',
    description:
        "Implemented Microsoft Fabric from scratch, integrating Azure data services to support comprehensive data analytics projects. Applied data science techniques including regression analysis and machine learning (RandomForest, RNN) to predict student retention and enrollment trends. Managed ETL using Fabric Notebooks and Azure Data Factory, and developed analytical dashboards and reports in Power BI. Collaborated with university departments to understand their data needs, contributing to a 35% increase in data-driven decisions.",
    tool: ['Microsoft Fabric', 'Azure Data Factory', 'Power BI', 'Python', 'Machine Learning', 'ETL', 'Data Science', 'Azure'],
  ),
  ServicesUtils(
    name: 'Southern Illinois University Edwardsville',
    title: 'Data Analyst – Graduate Assistant',
    icon: 'assets/imgs/siue.png',
    description:
        "Led the design and development of visually appealing analytical dashboards and reports using Microsoft Power BI, Excel and Access, resulting in a 20% increase in timely decision-making based on enrollment numbers and admission trends. Utilized SQL and data management techniques to extract, transform and load data from university databases, improving data accuracy by 15% through data cleansing. Collaborated with stakeholders to define data requirements, fostering a data-driven culture and leading to a 30% increase in data-driven decisions.",
    tool: ['Power BI', 'SQL', 'Excel', 'Access', 'Data Visualization', 'Data Analysis', 'ETL'],
  ),
  ServicesUtils(
    name: 'Tata Consultancy Services',
    title: 'Data Engineer – Analytics',
    icon: 'assets/imgs/tcs.png',
    description:
        "Led dashboard development and analytics initiatives, including data prep by extracting data from databases like AWS and SQL Server, using Python to build predictive models and Tableau to develop the presentation layer in customer-facing dashboards, resulting in a 15% enhancement in data reliability. Conducted advanced statistical analyses driving data-driven decision-making and a 12% increase in operational efficiency. Crafted compelling data visualizations using Tableau and Power BI, achieving a 10% rise in stakeholder engagement.",
    tool: ['Python', 'Tableau', 'Power BI', 'AWS', 'SQL Server', 'Predictive Modeling', 'Statistical Analysis', 'Data Engineering'],
  ),
];
