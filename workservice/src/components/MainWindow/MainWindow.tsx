import React,{useEffect, useState} from  'react'
import MainNavigation from '../../modules/MainWindow/MainNavigation'
import MainSearchInput from '../../modules/MainWindow/MainSearchInput'
import VacancyCard from '../../modules/MainWindow/VacancyCard'
import Position from '../../modules/CreateResume/Position';
import FilterArea from '../../modules/MainWindow/FilterArea'
import { Vacancies } from '../../api/vacancies';
interface Cards{
    Position: string;
    Salary:string;
    Company: string;
    City: string;
}

const MainWindow = () => {
    const [card, setCard] = useState<Cards[]>([])

    useEffect(() => {

        const loadCards = async () => {
            try{
                const response = await Vacancies.getVacancies()

                setCard(response.data);

            } catch(error){
                console.error("Ошибка при загрузке вакансий:",error)
            }
        }

        loadCards();
    },[])
    return (
        <>
             <MainSearchInput />
             {card.map((card) => {
                const { Position, Salary, Company, City } = card;
                return (
                    <VacancyCard 
                        Position={Position} 
                        Salary={Salary} 
                        Company={Company} 
                        City={City} 
                    />
                )
                   
            })}
            <FilterArea />
             
        </>
        
    )
}

export default MainWindow