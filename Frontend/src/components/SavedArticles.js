import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../helpers/api";
import ArticleList from "./ArticleList";

const SavedArticles = () => {

    const [ user, ] = useContext(UserContext);

    const [savedArticles, setSavedArticles] = useState();
  
    const history = useHistory();
  
    if (!user.isUserLoggedIn) {
      toast.warning("Please login to see your saved articles.");
      history.push("/login");
    }

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        const res = await api.get(`/article/saved`, { headers: { "auth-token": user.user_token }});
        if (res.data.status === 1 && res.data.data)
            setSavedArticles(res.data.data.articles);
    };

    return (
        <div>
        {
            savedArticles ? 
            <div>
                <h2>Your Saved Articles</h2>
                <ArticleList articles={savedArticles} />
            </div>
            : 
            <h2>You do not have any saved article</h2>
        }
        </div>
    )
}

export default SavedArticles