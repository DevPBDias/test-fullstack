import "./styles.css";
interface TitleProps {
  title: string;
  subtitle: string;
}

const DashboardTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="container-title-dashboard">
      <p className="title-dashboard">{title}</p>
      <p className="subtitle-dashboard">{subtitle}</p>
    </div>
  );
};

export default DashboardTitle;
