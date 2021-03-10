import React,{useState,useEffect,useRef} from 'react';
import CommonModal from './Modal';
import SearchBox from './SearchBox'
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
    ,Button

    } from 'reactstrap';

    let data = [
        {
          "lessons": [
            { "id":1,
              "name": "React - basics",
              "description": "This course is going to take you through basics of React.",
              "author": "James White",
              "publishDate": "12/03/2019",
              "duration": "00:03:56",
              "image": "https://cdn.auth0.com/blog/react-js/react.png",
              "showButton":false
            },
            {
                "id":2,
              "name": "Vue - learn vue in an hour",
              "description": "This course teaches you how to build a vue application in an hour.",
              "author": "Michael Brown",
              "publishDate": "17/10/2019",
              "duration": "00:00:59",
              "image": "https://vuejs.org/images/logo.png",
              "showButton":false
            },
            {
                "id":3,
              "name": "CSS Animations",
              "description": "Learn how to animate anything in CSS",
              "author": "Alan Smith",
              "publishDate": "04/12/2018",
                "duration": "00:02:11",
              "image": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
              "showButton":false
            },
            {
                "id":4,
              "name": "JS - Zero to hero",
              "description": "Everything you need to know in JS",
              "author": "Sarah Parker",
              "publishDate": "12/03/2019",
                "duration": "01:01:35",
              "image": "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
              "showButton":false
            }
          ]
        }
      ];



function Home(){
    const [lists,setList]=useState([]); 

    

    useEffect(()=>{
        setList(data[0].lessons);

    },[data]);


    const sorting = (key) => {
        let newData = [...lists];
        const beforeSortCourses = JSON.stringify(newData);
        newData.sort(compareByAsc(key));
        const afterSortCourses = JSON.stringify(newData);
        if (beforeSortCourses === afterSortCourses) {
          newData.sort(compareByDesc(key));
        }
        console.log("newData", newData);
        setList(newData);
      };
      

      const compareByAsc = (key) => {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      };
    
      const compareByDesc = (key) => {
        return function (a, b) {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        };
      };


     
    const searchCallback = (name) =>{
        console.log(name);
        if(name == ''){
            setList(data[0].lessons);
        }else{
            let newlist = lists.filter((val)=>{
                if(val.author.toLowerCase().includes(name.toLowerCase()) || val.name.toLowerCase().includes(name.toLowerCase()) || val.description.toLowerCase().includes(name.toLowerCase())){
                    return name;
                }
            });
            setList(newlist)
        }

    }

    const setHoverFunc = (bool,list,e) => {
       if(bool){
        var newList = lists.map((item)=>{
            if(item.id == list.id){
                item.showButton = true; 
                return item
            }else{
                return item
            }
        });
        setList(newList)
       } else{
        var newList = lists.map((item)=>{
            if(item.id == list.id){
                item.showButton = false; 
                return item
            }else{
                return item
            }
        });
        setList(newList);
       }
       

    }
    

    return (
        <Container className="Home"  data-testid="home">
           <Row>
               <Col md="6" className="SearchBoxWrapper" data-testid ="searchbox">
                
                <SearchBox searchCallback = {searchCallback}></SearchBox>
                    <div className="SortWrapper">
                    <Button className="SortByDate" 
                    onClick={() => {
                        sorting("publishDate");
                        }}
                        

                    >
                        Publish Date
                    </Button>
                    <Button
                        onClick={() => {
                        sorting("duration");
                        }}
                    >
                        Duration
                    </Button>
                    </div>
               </Col>
               
                <Col md="12">
                {
                    lists.map((list,index)=>{
                        const {image,author,name,description,publishDate,duration} = list;
                        return (
                            <div className="cardWrapper" key={index}  onMouseEnter={(e) => setHoverFunc(true,list,e)} 
                            onMouseLeave={(e) => setHoverFunc(false,list,e)}>
                                <Card >
                                    <CardImg className="CardImg" width="150px" height="150px" src={image} alt="Card image cap" />
                                    <CardBody className="CardBody" id = {author}>
                                        <CardTitle tag="h5"><b>Author</b>: {author}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2"><b>Name</b>: {name}</CardSubtitle>
                                        <CardText><b>Course Description</b>: {description}</CardText>
                                        <CardText><b>Publication Date</b>: {publishDate}</CardText>
                                        <CardText><b>Duration</b>: {duration}</CardText>
                                        
                                            <div className = {list.showButton?'showDiv':'hideDiv'}>
                                                <CommonModal buttonLabel="button" className ="someClass" />
                                            </div>
                    
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })
                    }
                     
                </Col>
            </Row>
        </Container>
    )
}

export default Home;