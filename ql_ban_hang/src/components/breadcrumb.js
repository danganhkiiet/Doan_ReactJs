import { Breadcrumb,BreadcrumbItem } from "reactstrap"
function BreadCrumb()
{
  return(
  <>
    <Breadcrumb listTag="div">
      <BreadcrumbItem
        href="#"
        tag="a">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem
        href="#"
        tag="a">
        Your home
      </BreadcrumbItem>
    </Breadcrumb>
    </>
  );
}
export default BreadCrumb;