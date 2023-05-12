import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { FlashCard } from "../components/FlashCard"
import { FlashCards } from "../components/FlashCards"
import { Button } from "../components/Button";
import { useState } from "react";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import { allFlashCards } from "../data/flashcards";
import { RadioButton } from "../components/RadioButton";

export default function FlashCardsPage() {
    const [ allCards, setAllCards ] = useState(allFlashCards);
    const [ showTitle, setShowTitle ] = useState(true);

    const handleButtonClick = () => {
        setAllCards(helperShuffleArray(allCards))
    }

    const handleTitleClick = () => {
        setShowTitle(true);
    }
    
    const handleDescriptionClick = () => {
        setShowTitle(false);
    }
    return (
        <>
            <Header>react-flash-cards-v1</Header>
            <Main>
                <Button
                    onClick={handleButtonClick}
                >
                    Embaralhar cards
                </Button>

                <div
                    className="flex gap-4 justify-center"
                >
                    <RadioButton 
                        name="info" 
                        checked={showTitle}
                        onClick={handleTitleClick}
                    >
                        Mostrar título
                    </RadioButton>
                    <RadioButton 
                        name="info"
                        checked={!showTitle}
                        onClick={handleDescriptionClick}
                    >
                        Mostrar descrição
                    </RadioButton>
                </div>

                <FlashCards>
                { allCards.map(({ title, description }, key) => {
                    return <FlashCard 
                                key={key} 
                                title={title}
                                description={description}
                                showTitleOrDescription={showTitle}
                            />
                }) }
                </FlashCards>
            </Main>
        </>
    );
}
