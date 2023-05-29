import React from "react";
import "./case_study8.css";
import { Link } from "react-router-dom";

export default function Project8() {
    return (
        <>
            <div className="project8--container">

                <div className="project8--headline-container">
                    <img className="project8--headline-img" src="../img/case_studies/project8/headline_img.png" />
                    <h1 className="projec8--headline-title">
                        Using Natural Language Processing to Predict Positive and Negative Yelp Reviews 
                    </h1>
                </div>

                <div className="project8--intro-container">
                    <h2 className="project8--intro-title">
                        Frustrations with Yelp
                    </h2>
                    <p className="project8--body-text">
                        Yelp is an app I want to love and use but constantly find myself installing it only to delete it shortly thereafter. 
                        I love that there are lots of filters to help find the perfect restaurant or business, that you can look up reviews 
                        and pictures from other users, and see overall business ratings. BUT I always find myself wishing there was a “What 
                        are you looking for?” option where I could type in the kind of business I was looking for and Yelp could use what I 
                        wrote along with my previous reviews to auto select the filters I need and return a list of business sorted not just 
                        by the businesses overall rating but by how they predict I would rate the business. 
                    </p>
                    <p className="project8--body-text">
                        Basically I hate having to go in and set a bunch of filters and seeing business that may have high ratings but I clearly 
                        wont go to based on my past reviews and what I’m looking for. The best example I have is when I was just recently in Las 
                        Vegas, I love laid back atmospheres and high end steak houses yet when I opened Yelp the recommended restaurants all 
                        looked like loud and raucous bars and nightclubs I would never go to. 
                    </p>
                    <h2 className="project8--intro-title">
                        Yelp Dataset Challenge
                    </h2>
                    <p className="project8--body-text">
                        For this project I used the Yelp Open Dataset which is available here and more specifically I focused on the reviews 
                        and businesses.
                    </p>
                    <div className="project8--img-container">
                        <img className="project8--dataset-img" src="../img/case_studies/project8/data_set.png"/>
                    </div>
                    <h2 className="project8--intro-title">
                        Project Goals:
                    </h2>
                    <ol className="project8--list">
                        <li className="project8--list-item">
                            <b>Predict whether a review is ‘positive’ or ‘negative’ based on the words used in the review (positive is any review with 
                            4 or 5 stars, and negative reviews are those with 3 stars or less).</b>
                        </li>
                        <li className="project8--list-item">
                            Create a sentiment score for each business based on the words used in each of reviews about the business.  — (future analysis)
                        </li>
                        <li className="project8--list-item">
                            Predict whether a business will succeed or fail. — (future analysis)
                        </li>
                    </ol>
                </div>

                <div className="project8--getting-started-container">
                    <h2 className="project8--intro-title">
                        Getting Started, What is Sentiment Analysis?
                    </h2>

                    <p className="project8--body-text">
                        To get started we need to look at what sentiment analysis is, from Techopedia:
                    </p>

                    <p className="project8--quote">
                        <i>"Sentiment analysis uses data mining processes and techniques to extract and capture data for analysis in order to discern the 
                        subjective opinion of a document or collection of documents, like blog posts, reviews, news articles and social media feeds like 
                        tweets and status updates."</i>
                    </p>

                    <p className="project8--body-text">
                        For this project I will take a Bag of Words approach where the order, phrases, and context is ignored. I will filter each review 
                        for words that are thought to be important in discovering the subjective opinion of the review. For each review we will look at 
                        how many stars the reviewer left and label it either positive or negative.
                    </p>

                    <ul className="project8--list">
                        <li className="project8--list-item">
                            Positive reviews = 4 or 5 stars
                        </li>
                        <li className="project8--list-item">
                            Negative reviews = 3 stars or lower
                        </li>
                        <li className="project8--list-item">
                            Of the almost 6,700,000 reviews about <b>64% are positive and 36% are negative.</b>
                        </li>
                    </ul>

                    <h2 className="project8--intro-title">
                        Imports
                    </h2>

                    <p className="project8--body-text">
                        Before digging into the data too much here is the list of libraries used for this project: 
                    </p>
                    <div className="project8--img-container">
                        <img className="project8--imports-img" src="../img/case_studies/project8/imports.png"/>
                    </div>
                    
                    <p className="project8--body-text">
                        By starting with the reviews.json file provided by Yelp I created a ‘sentiment’ column which is either ‘pos’ or ‘neg’ and dropped all 
                        except for ‘text’ and ‘sentiment’. 
                    </p>
                    <div className="project8--img-container">
                        <img className="project8--review-img" src="../img/case_studies/project8/review.png"/>
                    </div>
                    <p className="project8--body-text">
                        Due to the number of reviews unfortunately and memory issues I had to reduce the number of reviews that I will try and predict. I sampled 
                        50,000 reviews making sure to keep the distribution of pos/neg reviews the same as the overall population. 
                    </p>
                </div>

                <div className="project8--preparing-container">

                    <h2 className="project8--intro-title">
                        Preparing the Data
                    </h2>

                    <p className="project8--body-text">
                        For the Bag of Words (BOW) approach we could use all unique words however it will be very expensive computationally and there are lots or 
                        words such as ‘a’ or ‘the’ which care very little importance so we will need to do some filtering.  
                    </p>

                    <p className="project8--body-text">
                        <b>Filtering steps for each review:</b>  
                    </p>

                    <ol className="project8--list">
                        <li className="project8--list-item">
                            Remove punctuation
                        </li>
                        <li className="project8--list-item">
                            Tokenize each review
                        </li>
                        <li className="project8--list-item">
                            Remove stop words
                        </li>
                        <li className="project8--list-item">
                            Tag the ‘Part of Speech’ for each word
                        </li>
                        <li className="project8--list-item">
                            Add all Adjectives, Adverbs and Verbs to our Bag of Words, discarding the rest
                        </li>
                        <li className="project8--list-item">
                            Create a list of tuples with the review and label
                        </li>
                    </ol>
                    <div className="project8--img-container">           
                        <img className="project8--process-img" src="../img/case_studies/project8/bow_process.png"/>
                    </div>
                </div>

                <div className="project8--results-container">
                    <h2 className="project8--intro-title">
                        Create Features
                    </h2>
                    <p className="project8--body-text">
                        We will take the list of all words from above and create a dictionary where the keys are the words and the values are the counts of 
                        each word. From there we can take 3500 the most frequent words and create a feature set list by checking each review against the 3500 
                        most frequent words. From there I created a training and testing set with the training set using 40,000 reviews to train and 10,000 to test.  
                    </p>
                    <div className="project8--img-container">  
                        <img className="project8--top-words-img" src="../img/case_studies/project8/top_words.png"/>
                    </div>
                    <h2 className="project8--intro-title">
                        Baseline Model vs Naive Bayes Classifier
                    </h2>
                    <p className="project8--body-text">
                        For the baseline model we simply use the majority class of ‘positive’ for all reviews giving us an accuracy of 65.84%  
                    </p>
                    <p className="project8--body-text">
                        The first model I compared the baseline to was a Naive Bayes Classifier which has an accuracy of 77.19% which is a significant 
                        improvement over the baseline. 
                    </p>
                    <p className="project8--body-text">
                        To dig deeper into the results we can look the top 10 most informative words for negative reviews and positive reviews, and these 
                        results seem to make sense.
                    </p>
                    <div className="project8--side-by-side">
                        <img className="project8--top-neg-img" src="../img/case_studies/project8/top_neg.png"/>
                        <img className="project8--top-pos-img" src="../img/case_studies/project8/top_pos.png"/>
                    </div>
                    <p className="project8--body-text">
                        However something interesting is how mush more important negative words are to classifying a review than positive words are, when we look 
                        at the top 25 most important words only 4 are positive and the rest are negative and only 1 positive is in the top 10 most important.
                    </p>
                    <div className="project8--img-container">  
                        <img className="project8--important-img" src="../img/case_studies/project8/most_important.png"/>
                    </div>
                    <p className="project8--body-text">
                        Since the Naive Bayes out preformed the base line model, I tried a few others:
                    </p>
                    <ol className="project8--list">
                        <li className="project8--list-item">
                            Multinomial Naive Bayes Classifier accuracy: 84.3%
                        </li>
                        <li className="project8--list-item">
                            Bernoulli Naive Bayes Classifier accuracy: 77%
                        </li>
                        <li className="project8--list-item">
                            <b>Logistic Regression Classifier accuracy: 86.5%</b>
                        </li>
                        <li className="project8--list-item">
                            SGDClassifier accuracy: 86.4%
                        </li>
                        <li className="project8--list-item">
                            Linear Support Vector Classifier accuracy: 85.6%
                        </li>
                    </ol>
                </div>

                <div className="project8--final-container">
                    <h2 className="project8--intro-title">
                        Final Thoughts
                    </h2>
                    <p className="project8--body-text">
                        It seems that by taking even a simple Bag of Words approach where lots of context is lost we can still fairly accurately classify reviews 
                        as positive or negative. I hope to be able to create an ensemble model next that should also give me a confidence score for each prediction 
                        which I’m hoping to be able to use to create new feature along with the most important features. Once I have my ensemble model I can run all 
                        of the reviews in batches and then with the new features merge the reviews back with the businesses. The goal is still to predict whether or 
                        not a business will fail based on the reviews is it getting and if it is in danger of failing the business owner can have more information 
                        into what is driving the worst reviews and make changes accordingly. 
                    </p>
                    <h2 className="project8--intro-title">
                        Next Steps:
                    </h2>
                    <ol className="project8--list">
                        <li className="project8--list-item">
                            Building an Ensemble Model
                        </li>
                        <li className="project8--list-item">
                            Add a confidence score for each prediction.
                        </li>
                        <li className="project8--list-item">
                            Use features with the businesses.json file to predict if a business will succeed or fail. 
                        </li>
                    </ol>
                    <p className="project8--body-text">
                        <a 
                            href="https://github.com/AndrewMarksArt/yelp_data_applied_modeling" 
                            target="_blank"
                            className="project8--git-link"
                        >
                            View code on github.
                        </a>
                    </p>
                </div>

                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project8--back-to-button">Back to projects </Link>

            </div>
        </>
    )
}