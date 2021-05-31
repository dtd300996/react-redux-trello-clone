import { Button, Card, Icon, TextareaAutosize } from '@material-ui/core';
import { addList } from 'actions';
import { addCard } from 'actions/cardActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TrelloActionButton(props) {
	const { listID, list } = props;

	const [formOpen, setFormOpen] = useState(false);

	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const openForm = () => {
		setFormOpen(true);
	};

	const closeForm = () => {
		setFormOpen(false);
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setText(value);
	};

	const handleAddList = () => {

		if(text) {
			console.log('ADD LIST');
			dispatch(addList(text));
		}

		return
	}

	const handleAddCard = () => {
		if(text) {
			console.log('ADD CARD');
			dispatch(addCard(listID,text));
		}

		return;
	}

	const renderAddButton = () => {
		const buttonText = list ? 'Add anothor list' : 'Add anothor card';
		const stylesAddButton = {
			opacity: list ? 1 : 0.5,
			color: list ? 'white' : 'inherit',
			background: list ? 'rgba(0,0,0,.15)' : 'inherit',
		};

		return (
			<div style={{ ...stylesAddButton, ...styles.openFormButtonGroup }} onClick={openForm}>
				<Icon>+</Icon>
				<p>{buttonText}</p>
			</div>
		);
	};

	const renderForm = () => {
		const placeholder = list ? 'Enter list title...' : 'Enter a title for this card...';

		const buttonTitle = list ? 'Add List' : 'Add Card';
		return (
			<div>
				<Card
					style={{
						overflow: 'hidden',
						minHeight: 80,
						minWidth: 272,
						padding: '6px 8px 2px',
					}}
				>
					<TextareaAutosize
						placeholder={placeholder}
						autoFocus
						onBlur={closeForm}
						onChange={handleInputChange}
						value={text}
						style={{
							resize: 'none',
							width: 272,
							outline: 'none',
							border: 'none',
						}}
					/>
				</Card>
				<div style={styles.formButtonGroup}>
					<Button
						onMouseDown={list ? handleAddList : handleAddCard}
						variant="contained"
						style={{
							color: 'white',
							backgroundColor: '#5aac44',
						}}
					>
						{buttonTitle}
					</Button>
					<Icon>X</Icon>
				</div>
			</div>
		);
	};

	return formOpen ? renderForm() : renderAddButton();
}

const styles = {
	openFormButtonGroup: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
		width: 272,
		paddingLeft: 10,
	},
  formButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8
  }
};

export default TrelloActionButton;
