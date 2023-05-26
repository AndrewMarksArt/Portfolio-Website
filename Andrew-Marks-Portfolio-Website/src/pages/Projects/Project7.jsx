import React from "react";
import "./case_study7.css";
import { Link } from "react-router-dom";

export default function Project7() {
    return (
        <>
            <div className="project7--container">
                <div className="project7--banner-container">
                    <img src="../img/case_studies/project7/p7_banner.png"/>
                    <h1>In Search of Value - AirBnB Price Prediction Model</h1>
                </div>

                <div className="project7--intro-container">
                    <h2>Honeymoon in Dublin</h2>
                    <p>
                        On November 22, 2019 I was lucky enough to marry the love of my life. The months of planning the wedding 
                        and honeymoon flew by and on December 18th we left for a trip of a lifetime. When we started planning or 
                        trip Dublin was always at the top of the list and after getting home we can’t wait to go back.
                    </p>
                    <p>
                        So when I had the opportunity of working with AirBnB and saw that one of the data sets was of Ireland, I 
                        couldn’t wait to get started.
                    </p>
                    <h2>Project Goal</h2>
                    <p>
                        If anyone has tried booking a hotel, especially when traveling internationally, it can be a nightmare. I 
                        still remember an old family trip to London where the front desk gave us a small fan when we asked how to 
                        turn on the A/C, to say the hotel didn’t live up to our expectations is an understatement.
                    </p>
                    <p>
                        Looking for a good deal while trying to find a nice place that meets all of your needs isn’t easy even with 
                        all of the different travel and booking sites that have popped up over the years.
                    </p>
                    <p>
                        What I wanted to do was use the data from AirBnB to build a model that would predict the price per night. From 
                        there I can compare it to the actual rate in the listing and determine if that price is good, fair, or poor value.
                    </p>
                </div>

                <div className="project7--data-container">
                    <div>
                        <h2>About the Data</h2>
                        <p>
                            The data for this project is from the detailed listings file downloaded from Inside Airbnb 
                            (insideairbnb.com/get-the-data.html) and was complied on November 23, 2019.
                        </p>
                        <p>
                            The data set contained 28,850 detailed listings from across Ireland, after taking a quick look over the 
                            different columns in the data I chose to keep 85 out of the over 100 to begin a more detailed exploration.
                        </p>
                        <p>
                            Due to the time constraints I faced and the lack of a detailed data dictionary that explained most of the features, 
                            unfortunately, I knew I would have to drop a significant amount of columns. Most features that required natural 
                            language processing (nlp) would need to be put aside for another day along with others that seemed to be redundant.
                        </p>
                    </div>
                    <img src="../img/case_studies/project7/listings.png"/>
                </div>

                <div className="project7--data-exploration">
                    <h2>Data Exploration</h2>
                    <p>
                        After loading the data and dropping some of the redundant columns I printed out the first few rows to get a handle 
                        on the data. 
                    </p>
                    <img src="../img/case_studies/project7/data_exploration.png"/>
                    <p>
                        From here I used pandas describe() to examine the numerical features. The result was that there were some obvious outliers
                        that would need to be trimmed.
                    </p>
                    <p>
                        Next was dealing with null values, there was quite a few features with significant amounts of null values and those were dropped.  
                    </p>
                    <p>
                        From here I used pandas profiling to further explore the data and highlight any potential issues.
                    </p>
                    <img src="../img/case_studies/project7/data_set_info.png"/>
                    <p>
                        Here we can see there are some issues and warnings that need to be dealt with. 
                    </p>
                    <ul>
                        <li>
                            drop some columns recommended in the report
                        </li>
                        <li>
                            change columns with ‘t’ or ‘f’ to 1 / 0 
                        </li>
                        <li>
                            clean columns that are monitary by removing ‘$’ and ‘%’ and changing values to the correct type
                        </li>
                        <li>
                            check for data entry errors ( some listings had price as 12345 with the real price in the description )
                        </li>
                        <li>
                            trim outliers and fill null values
                        </li>
                    </ul>
                    <p>
                        Now that the data is mostly cleaned I could move onto building models.
                    </p>
                </div>

                <div className="project7--baseline-container">
                    <h2>Building a Baseline Model</h2>
                    <img src="../img/case_studies/project7/baseline_mean_price.png"/>

                    <div className="project7--baseline-process-container">
                        <p>
                            Before trying to build a more advanced model I needed to create a baseline model that I could compare future models to. 
                            Since we are looking at trying to predict the price of a listing I used the average price for this baseline.
                        </p>
                        <p>
                            Next I needed to choose which metrics to evaluate the models with:
                        </p>
                        <ul>
                            <li>
                                Mean absolute error (MAE), which is the average difference between the actual price and the predicted price regardless 
                                of direction and everything is weighted equally.
                            </li>
                            <li>
                                Root mean squared error (RMSE), which squares the difference between the actual price and predicted price then takes the 
                                average and then takes the square root. This gives a higher weight to larger errors and is useful since we want to penalize 
                                the larger errors more.
                            </li>
                            <li>
                                R squared (R^2), which shows the amount of variance in price that is predicted by the model features  
                            </li>
                        </ul>
                    </div>

                    <p>
                        From above we can see the average price is about $81.72 per night, the MAE is about $33.02, the RMSE is about $41.90, and R^2 is basically 0.
                    </p>
                    <p>
                        This gave me a good baseline to work with, the errors are quite large and with an R^2 of approximately 0 it should be easy to improve on. But 
                        before trying to build any models I still needed to deal with a few categorical features.
                    </p>
                    <img src="../img/case_studies/project7/encoding_cat_features.png"/>
                    <p>
                        Once the categorical features were encoded I created a Linear Regression model using all of the features. With a linear regression we are 
                        determining if there is a linear relationship between our dependent or target variable which is price and one or more of the features. Below 
                        we can see slight improvements and some of the coefficients. The MAE improved from about $33 to $22.70, the RMSE from $41.90 to $30.15 which 
                        is good news and our R^2 is much better now at 0.482.
                    </p>
                    <img src="../img/case_studies/project7/regression_coef.png"/>

                </div>

                <div className="project7--feature-container">
                    <h2>Multiple Regression and Feature Selection</h2>
                    <p>
                        But now I wanted to explore using feature selection and build the model with only the most significant features. By using scikit-learns f_regression 
                        and selecting the features with the largest F-score. And the results are below.</p>
                    <div>
                        <img src="../img/case_studies/project7/new_features.png"/>
                        <img src="../img/case_studies/project7/results_less_features.png"/>
                    </div>
                    <p>
                        The new results are a little disappointing, while the results are better than the baseline they are much worse than kitchen sink approach. Now 
                        there are much better ways of trying to find the best features but instead of trying to make more adjustments and dig deeper with this model I 
                        felt that a linear regression model most likely wouldn’t be the best approach. Without digging into the descriptions to do more feature engineering 
                        there was only so much that could be done so I moved on and built a Random Forest model.
                    </p>
                    <h2>Random Forest and Hyper Parameter Tuning</h2>
                    <p>
                        To begin I started with an out of the box Random Forest Regression. A Random Forest model is actually a model made up of many decision trees, these 
                        decision trees are models that have a tree or flow chart structure. A Random Forest model can compete with more advanced algorithms and provides 
                        useful feature importance estimates.
                    </p>

                    <div>
                        <div>
                            <p>
                                Here we can see the results and they are an improvement on the Linear Regression that was previously the best performing model.
                            </p>
                            <ul>
                                <li>The MAE is now down to about $19</li>
                                <li>The RMSE is about $26.47</li>
                                <li>And R^2 is about 0.6 </li>
                            </ul>
                            <p>
                                All of these metrics show significant improvement so from here I looked to tune the model parameters.
                            </p>
                        </div>
                        <img src="../img/case_studies/project7/basic_rf_results.png"/>
                    </div>

                    <p>
                        When optimizing hyper parameters there are a few different approaches.
                    </p>
                    <ul>
                        <li>
                            Manually select and try hyper parameters using experience, or intuition or simply guessing.
                        </li>
                        <li>
                            Grid Search, set up a grid of hyper parameter values for each combination then train and score a model for each combination to 
                            find the best results.
                        </li>
                        <li>
                            Random Search, again set up a grid of hyper parameter values and select random combinations to train and test on.
                        </li>
                    </ul>
                    <p>
                        For this project I lacked the domain knowledge or experience to try and manually set the hyper parameters and a grid search can be very expensive 
                        computationally, which leaves the random search. Below is the results of random search and the new model using the best parameters. 
                    </p>
                    <img src="../img/case_studies/project7/best_params.png"/>
                    <p>
                        Now that the model has been optimized we can score the new model. Below are the results and while there was some improvement it was minimal. 
                        More interesting is the feature importance scores which tell us the most important features in the model.
                    </p>

                    <div>
                        <img src="../img/case_studies/project7/best_param_scores.png"/>
                        <img src="../img/case_studies/project7/importance.png"/>
                    </div>
                    <p>
                        At this point it seems that the improvements in the model would be minimal with out using natural language processing to create new features which 
                        is something that I will explore in the future. So at this point I moved on to some visualizations. 
                    </p>

                </div>

                <div className="project7--maps-container">
                    <h2>Map Visualization</h2>
                    <p>
                        The whole idea for this project was to help people looking to book an Airbnb find a good value. To do this instead of using the grid like 
                        layout Airbnb uses or simply listing the best deals, I used a map so the user could explore the area and get a feel for where each listing 
                        was. Below is a zoomed out map of Dublin, each circle is a listing from the data set sized by actual price and colored by value. I classified 
                        the value based on the difference between the listing price and the models predicted price. Green represents a good value where the actual price 
                        is less than the predicted price, Yellow is fair value where the predicted price and actual price are relatively close, and Red is considered 
                        poor value where the actual price is higher than the model price.
                    </p>
                    <img src="../img/case_studies/project7/zoomed_out_map.png"/>
                    <p>
                        Here we can see a zoomed version of the map. What makes these so nice is that you can get a feel for where the listings are, how walk-able the 
                        area is and where key landmarks are. These maps are images created from interactive maps
                    </p>
                    <img src="../img/case_studies/project7/zoomed_in_map.png"/>
                    <p>
                        From above you can see that the model seems to perform poorly with listings that are more expensive. This makes sense since I haven’t looked 
                        into any of the descriptions yet. There are possibly many great features that could be created from that text and is worth exploring.
                    </p>

                    <h2>Moving Forward</h2>
                    <p>Moving forward there are two major areas I would like to expand on.</p>
                    <ul>
                        <li>
                            Using natural language processing (nlp) to create new features from the descriptions of the listings.
                        </li>
                        <li>
                            Create a simple web app that will allow users to create their own map based on the features they are looking for such as how many bedrooms 
                            they need, what the cleaning fee is, or the minimum number of nights.
                        </li>
                    </ul>
                </div>

                <Link to="/projects" style={{ textDecoration: 'underline' }} className="project7--back-to-button">Back to projects </Link>

            </div>
        </>
    )
}