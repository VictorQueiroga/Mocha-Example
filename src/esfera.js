class esfera {


    area(r)  {
        return 4*3.14*r*r;
    }

    volume(r)  {
        return (4*3.14*r*r*r)/3;
    }
}

module.exports = esfera;