import { CARTEGORIES_ADD_ENDPOINT } from '../../constants/endpoints';
import { ADD_CATEGORIES_FORM_PATH  } from '../../constants/pathNames';
import { createRequestPath } from '../../helpers/helpers';

import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';

import Input from '../Input';
import Button from '../Button';
import PageWrapper from '../PageWrapper';
import { ChangeIdContext } from '../../App';


const AddCategoriesJuForm = ({ data, onSetDeletedId }) => {
    const [formData, setFormData] = useState({
      title: '',
      image: '',
      priority: '',
      urlSlug: '',
    });
    const navigator = useNavigate();
    let { refetchId, setRefetchId } = useContext(ChangeIdContext)
  
    const onSubmitDataToApi = (category) => {
      const apiEndpoint = createRequestPath(CARTEGORIES_ADD_ENDPOINT);
      fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(category),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => {
          if (resp?.status === 200) {
            navigator(ADD_CATEGORIES_FORM_PATH );
          }
        })
        .catch((err) => console.log('ERROR =>', err));
    };
  
    const onInputChange = (name, value) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };
  
      const onAddCategory = () => {
        const category = {
          ...formData,
          id: uuidv4(),
        };
      
        if (category.title && category.image && category.priority) {
          setFormData({
            title: '',
            image: '',
            priority: '',
            urlSlug: '',
          });
      
          onSubmitDataToApi(category);
        } else {
          console.error('Some required fields are missing:', category);
        }
      };
  
    return (
      <PageWrapper>
        <div>
        <h2>Add new category</h2>
      <div>
            <Input
              label="name: "
              name="title"
              placeholder="Enter category's name"
              onChangeFunction={(value) => onInputChange('title', value)}
              value={formData.title}
              validation={true}
            />
  
            <Input
              label="image: "
              name="image"
              placeholder="Enter category's image url"
              onChangeFunction={(value) => onInputChange('image', value)}
              value={formData.image}
              validation={true}
            />
  
            <Input
              label="priority: "
              name="priority"
              placeholder="Enter category's priority"
              onChangeFunction={(value) => onInputChange('priority', value)}
              type="number"
              value={formData.priority}
              validation={true}
            />
  
            <Input
              label="urlSlug: "
              name="urlSlug"
              placeholder="Enter category's urlSlug"
              onChangeFunction={(value) => onInputChange('urlSlug', value)}
              value={formData.urlSlug}
              validation={true}
            />
  
            <Button type="button" onClickFunction={onAddCategory} title={'add'} />
          </div>
        </div>
      </PageWrapper>
    );
  };
  

export default AddCategoriesJuForm;