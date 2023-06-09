import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { editCourse } from "../features/courses/courseSlice";

const EditFederation = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses);

  const [course, setCourse] = useState(courses.filter((c) => c.id == id)[0]);

  console.log(course);

  const handleEdit = (e) => {
    e.preventDefault();
    alert("Course edited successfully");
  };

  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState(course.title);
  const [courseprice, setCourseprice] = useState(course.price);
  const [courseInstructor, setCourseInstructor] = useState(course.instructor);
  const [courseDescription, setCourseDescription] = useState(
    course.description
  );
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState("");

  const handleRegisterCourse = () => {
    setLoading(true);
    setModules([courseDescription]);
    dispatch(
      editCourse({
        id: course.id,
        title: courseName,
        instructor: courseInstructor,
        image: "https://img-a.udemycdn.com/course/240x135/1286908_1773_6.jpg",
        price: courseprice,
        url: "https://www.udemy.com/course/react-2nd-edition/",
        description: courseDescription,
      })
    );

    axios({
      method: "post",
      url: "35.222.255.39:8080/api/v1/courses",
      data: JSON.stringify({
        title: "biology",
        price: "4 month",
        instructor: "Taru",
        modules: ["modules"],
      }),
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        alert("Course registered successfully");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a course
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="courseName">Course name</Label>
                <Input
                  onChange={(e) => setCourseName(e.target.value)}
                  id="courseName"
                  name="courseName"
                  placeholder="Name of the course"
                  type="text"
                  defaultValue={course.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseprice">Course price</Label>
                <Input
                  onChange={(e) => setCourseprice(e.target.value)}
                  id="courseprice"
                  name="courseprice"
                  placeholder="The price of the course"
                  type="text"
                  defaultValue={course.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseInstructor">Course Instructor</Label>
                <Input
                  onChange={(e) => setCourseInstructor(e.target.value)}
                  id="courseInstructor"
                  name="courseInstructor"
                  placeholder="Name of the course instructor"
                  type="text"
                  defaultValue={course.instructor}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseDescription">Course Description</Label>
                <Input
                  onChange={(e) => setCourseDescription(e.target.value)}
                  id="courseDescription"
                  name="courseDescription"
                  placeholder="Enter description of the course"
                  type="textarea"
                  defaultValue={course.description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFile">Upload image</Label>
                <Input id="imageFile" name="imageFile" type="file" />
                <FormText>
                  Upload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup>
              <Button onClick={handleRegisterCourse}>
                {loading ? "Loading..." : "Submit"}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditFederation;
