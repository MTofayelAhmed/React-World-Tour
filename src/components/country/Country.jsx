import "./country.css"

const Country = ({country}) => {
    const {name}= country
    return (
        <div className="country">
            <h5>Country Name: {name?.common}</h5>
        </div>
    );
};

export default Country;