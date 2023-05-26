import react, {useState} from 'react';
import Container from '.../todoapp/src/Styled/Container.js';
import Button from '.../todoapp/src/Styled/Button.js';
import Input from '.../todoapp/src/Styled/Input.js';
import Text from '.../todoapp/src/Styled/Text.js';

function DisplayItems() {
    //instead of this should call a costum hook to process the files into
    //an image array in JSX
    //From there it gets returned and handled by the costum hook
    let [imageList, setImageList] = useState([
        {id: 0,image: 'Image Element'}
    ]);
    
    const handleImageList = (imageList) => {
        setImageList(imageList);
    }

    return(
        <Container>
            {imageList.map((id,image) => {
                return(
                    <div key={id}>
                        <Text>{image}</Text>
                    </div>
                )
            })}
        </Container>
    )
}

export default DisplayItems;