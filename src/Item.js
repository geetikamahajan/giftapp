import './Item.css';
import * as React from 'react';
import {Helmet} from "react-helmet";
import {FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import emailjs from 'emailjs-com';

function Item({name, imgLink, sizes, lengths}) {
    const [itemSize, setItemSize] = React.useState('');
    const [itemLength, setItemLength] = React.useState('');
    const [buttonValue, setButtonValue] = React.useState('Tell Geetika I want this one');
    const [buttonVariant, setButtonVariant] = React.useState('outlined');
    const menuItemsLength = lengths.map(length => <MenuItem value={length}>{length}</MenuItem>)
    const menuItemsSize = sizes.map(size => <MenuItem value={size}>{size}</MenuItem>)
    const handleChangeSize = (event) => {
        setItemSize(event.target.value);
    };
    const handleChangeLength = (event) => {
        setItemLength(event.target.value);
    };
    function tellGeetika(e) {
        e.preventDefault()
        if (itemSize !== '' && buttonValue === 'Tell Geetika I want this one') {
            setButtonValue("Told Geetika I want this one")
            setButtonVariant('contained')
            let combinedSize = itemSize;
            if (itemLength !== '') {
                combinedSize = combinedSize + "/" + itemLength;
            }
            const templateParams = {
                item_name: name,
                size: combinedSize
            };
            sendEmail(templateParams);
        } else {
            setButtonValue("Tell Geetika I want this one")
            setButtonVariant('outlined')
        }
    }
    function sendEmail(templateParams) {
        emailjs.send('service_uenjcwb', 'template_eysfuug', templateParams, 'tCpV5PR_VWOgzH79x')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    if (lengths.length === 0) {
        return (
            <div className={"Item"}>
                <Helmet>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Helmet>
                <img className={"Image"} src={imgLink}/>
                <p>{name}</p>
                <div className={"Item-options"}>
                    <div>
                        <FormControl required variant={'outlined'} className={"Size-select"}>
                            <InputLabel id="demo-simple-select-label">Size</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={itemSize}
                                label="Size"
                                onChange={handleChangeSize}
                            >
                                {menuItemsSize}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={"Button"}>
                        <Button variant={buttonVariant} onClick={tellGeetika}>{buttonValue}</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={"Item"}>
                <Helmet>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Helmet>
                <img className={"Image"} src={imgLink}/>
                <p>{name}</p>
                <div className={"Item-options"}>
                    <div>
                        <FormControl required variant={'outlined'} className={"Size-select"}>
                            <InputLabel id="demo-simple-select-label">Size</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={itemSize}
                                label="Size"
                                onChange={handleChangeSize}
                            >
                                {menuItemsSize}
                            </Select>
                        </FormControl>
                        <FormControl required variant={'outlined'} className={"Length-select"}>
                            <InputLabel id="demo-simple-select-label">Length</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={itemLength}
                                label="Length"
                                onChange={handleChangeLength}
                            >
                                {menuItemsLength}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={"Button"}>
                        <Button variant={buttonVariant} onClick={tellGeetika}>{buttonValue}</Button>
                    </div>
                </div>
            </div>
        );
    }


}

export default Item;