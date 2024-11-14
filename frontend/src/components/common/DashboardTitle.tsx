import "./styles.css";
interface TitleProps {
  title: string;
  subtitle: string;
}

const DashboardTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="container-title-dashboard">
      <h3 className="title-dashboard">{title}</h3>
      <h4 className="subtitle-dashboard">{subtitle}</h4>
    </div>
  );
};

export default DashboardTitle;
