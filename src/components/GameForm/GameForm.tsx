import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseGame_Title, chooseDescription, choosePrice, 
    chooseRating, chooseDate_Made, chooseCreator, chooseReview } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface GameFormProps {
    id?:string;
    data?:{}
}

interface GameState {
    game_title: string;
    price: string;
    description: string;
    rating: string;
    date_made: string;
    creator: string;
    review: string
}

export const GameForm = (props:GameFormProps) => {

    const dispatch = useDispatch();
    let { gameData, getData } = useGetData();
    const store = useStore()

    const game_title = useSelector<GameState>(state => state.game_title)
    const price = useSelector<GameState>(state => state.price)
    const description = useSelector<GameState>(state => state.description)
    const rating = useSelector<GameState>(state => state.rating)
    const date_made = useSelector<GameState>(state => state.date_made)
    const creator = useSelector<GameState>(state => state.creator)
    const review = useSelector<GameState>(state => state.review)
    
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseGame_Title(data.game_title))
            dispatch(choosePrice(data.price))
            dispatch(chooseDescription(data.description))
            dispatch(chooseRating(data.rating))
            dispatch(chooseDate_Made(data.date_made))
            dispatch(chooseCreator(data.creator))
            dispatch(chooseReview(data.review))

            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="game_title">Game Title</label>
                    <Input {...register('game_title')} name="game_title" placeholder='Game Title' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <Input {...register('rating')} name="rating" placeholder="Rating"/>
                </div>
                <div>
                    <label htmlFor="">Date Made</label>
                    <Input {...register('date_made')} name="date_made" placeholder="Date Made"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="creator">Creator</label>
                    <Input {...register('creator')} name="creator" placeholder="Creator"/>
                </div>
                <div>
                    <label htmlFor="review">Review</label>
                    <Input {...register('review')} name="review" placeholder="Review"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}