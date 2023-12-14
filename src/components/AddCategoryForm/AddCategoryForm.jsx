import Input from "../Input";
import './addCategoryForm.css';
import CategoriesCard from '../CategoriesCard';
import { useEffect, useState, useNavigate, useContext} from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_ADD_ENDPOINT } from "../../constants/endpoints";
// import { ADD_CATEGORIES_FORM_PATH } from "../../constants/pathNames";
import { v4 as uuidv4 } from 'uuid';
import Categories from "../Categories";
import PageWrapper from "../PageWrapper";
import * as ReactDOM from 'react-dom';
const AddCategoryForm = () => {
	const [categories, setCategories] = useState();
	const [flagToRender, setflagToRender] = useState();
	const [title, settitle] = useState();
	const [image, setImage] = useState();
	const [priority, setpriority] = useState();
	const [urlSlug, seturlSlug] = useState();
	const [redClassFlag, setredClassFlag] = useState(false);
	const [buttonSavecategoryFlag, setbuttonSavecategoryFlag] = useState(false);
	const [getIdForSave, setGetIdForSave] = useState();
	// const navigator = useNavigate();

	
  
	const onSubmitDataToApi = (category) => {
		
	  const apiEndpoint = createRequestPath(CARTEGORIES_ADD_ENDPOINT);
  	  fetch(apiEndpoint, {
		method: "POST",
		body: JSON.stringify(category),
		headers: { "Content-Type": "application/json" },
	   })
	   .then(resp => { 
		console.log('response => ', resp);
		return resp;
	  })
	  .then( resp => resp.json())
	  .then(resp => console.log('response Parsed => ', resp))
	//   .then(() => navigator(ADD_CATEGORIES_FORM_PATH))
	   .catch(err => console.log('error => ', err))
	}



	function onAddcategory  () {
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
			// setflagToRender(i++)
		}
		else {
			setredClassFlag(true)
		}
	}


	const onGetIdForSave = (value) => {
		setGetIdForSave(value)
	};

	const onGetbuttonSavecategoryFlag = (value) => {
		setbuttonSavecategoryFlag(value)
	};
	const onGetName = (value) => {
		settitle(value)
	};

	const onGetImage = (value) => {
		setImage(value)
	}

	const onGetpriority = (value) => {
		setpriority(value)
	}
	const onGeturlSlug = (value) => {
		seturlSlug(value)
	};

	// const onDeletecategory = (id) => {
	// 	setCategories(categories.filter((category) => category.id !== id))
	// }
	const returnToAdd = (id) => {
		settitle(``);
		setImage('');
		setpriority('');
		seturlSlug('');
		setbuttonSavecategoryFlag(false)
	}
	const onSavecategory = () => {
		categories.map((category) => {
			if (category.id === getIdForSave) {
				category.title = title;
				category.image = image;
				category.priority = priority;
				category.urlSlug = urlSlug;

				return
			}

		})

		setCategories(categories)
		onGetName('');
		onGetImage('');
		onGetpriority('');
		onGeturlSlug('');
		setredClassFlag('')

	}

	// const onUpdatecategory = (el) => {
	// 	let newUp = categories.filter((category) => {

	// 		if (category.id === el) {
	// 			onGetbuttonSavecategoryFlag(true)
	// 			return category;
	// 		}

	// 	});
	// 	if (newUp.length > 0) {
	// 		console.log(newUp[0].id);
	// 		onGetName(newUp[0].title)
	// 		onGetImage(newUp[0].image)
	// 		onGetpriority(newUp[0].priority)
	// 		onGeturlSlug(newUp[0].urlSlug)
	// 		onGetIdForSave(el)
	// 		// console.log(title);
	// 	}
	// 	else {
	// 		return
	// 	}
	// }

	const editcategoryTitle = ({}) => {
		let title
		categories.map((category) => {
			if (category.id === getIdForSave) {
				title = category.title
				return
			}
		})
		return title
	}




	return (
		<PageWrapper>
		<div className='add-new-category'>
			{
				buttonSavecategoryFlag ? <h2 className="edit-category">Edit category - {editcategoryTitle()} </h2> : <h2>Add new category</h2>
			}
			<div className="add-new-category-panel">
				<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter category's name" onChangeFunction={onGetName} value={title} />
				<Input classNameFlag={redClassFlag} label="image: " placeholder="Enter category's image url" onChangeFunction={onGetImage} value={image} />
				<Input classNameFlag={redClassFlag} label="priority: " placeholder="Enter category's priority" onChangeFunction={onGetpriority} type='number' value={priority} />
				<Input label="urlSlug: " placeholder="Enter category's urlSlug" onChangeFunction={onGeturlSlug}  value={urlSlug} />

			</div>
			{
				buttonSavecategoryFlag ? 
				<div>
					<button className="add-category-item" type="button" onClick={onSavecategory}>save category</button> 
					<button className="add-category-item" type="button" onClick={returnToAdd}>return to add mode</button>
				</div> : 
				<button className="add-category-item" type="button" onClick={onAddcategory}>add</button>
			}
			<hr />
			
			<Categories flagReverse={true} />
		</div >
		</PageWrapper>
	);
};

export default AddCategoryForm;
