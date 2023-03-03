import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbExample() {
  return (
    <div>
      <div>
        <h1>
        Example
        </h1>
        Add active prop to the active Breadcrumb.Item. Do not set both
        active and href attributes. active overrides href and span element is
        rendered instead of a.
      </div>
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbExample;
