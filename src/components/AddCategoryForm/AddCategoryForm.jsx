import React, { useState, useContext } from "react";
import Input from "../Input";
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_ADD_ENDPOINT } from "../../constants/endpoints";
import Blog from "../Blog";  // Важливо імпортувати компоненту Blog
import PageWrapper from "../PageWrapper";
import { v4 as uuidv4 } from 'uuid'; 
import { ChangeIdContext } from "../../App";

const AddBlogForm = () => {
  let { refetchId, setRefetchId } = useContext(ChangeIdContext);

  const [name, setName] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const [isShow, setIsShow] = useState(true);
  const [dateTimePublish, setDateTimePublish] = useState();
  const [redClassFlag, setRedClassFlag] = useState(false);

  const onSubmitDataToApi = (blog) => {
    const apiEndpoint = createRequestPath(BLOGS_ADD_ENDPOINT);
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    })
      .then(resp => {
        console.log('response => ', resp);
        if (resp.status) {
          setRefetchId(uuidv4())	
        }
      })
  }

  function onAddedIDChanged() {
    return uuidv4()
  }


	function onAddcategory() {
		const category = {
			title,
			image,
			priority,
			urlSlug,
		};
		if (category.title && category.image && category.priority) {
			settitle(``);
			setImage('');
			setpriority('');
			seturlSlug('');
			setredClassFlag(false)
			onSubmitDataToApi(category)
		
		}
		else {
			setredClassFlag(true)
		}
	}

  const onGetText = (value) => {
    setText(value)
  }

  const onGetImage = (value) => {
    setImage(value)
  }

  const onGetDateTimePublish = (value) => {
    setDateTimePublish(value)
  };

	return (
		<PageWrapper>
			<div className='add-new-category'>
				{
					 <h2>Add new category</h2>
				}
				<div className="add-new-category-panel">
					<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter category's name" onChangeFunction={onGetName} value={title} />
					<Input classNameFlag={redClassFlag} label="image: " placeholder="Enter category's image url" onChangeFunction={onGetImage} value={image} />
					<Input classNameFlag={redClassFlag} label="priority: " placeholder="Enter category's priority" onChangeFunction={onGetpriority} type='number' value={priority} />
					<Input label="urlSlug: " placeholder="Enter category's urlSlug" onChangeFunction={onGeturlSlug} value={urlSlug} />
				</div>
				<button className="add-category-item" type="button" onClick={onAddcategory}>add</button>
				<hr />
				<Categories flagReverse={true} buttonFlag={true}/>
			</div >
		</PageWrapper>
	);
};

export default AddBlogForm;
