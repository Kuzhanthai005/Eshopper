import React,{useState} from 'react'

const KeywordSortFilter = (props) => {
    const { keyWordSearch } = props.filterOptions;
    const { orderBy } = props.filterOptions;

    
    return (
        <>
            <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search by name" onChange={keyWordSearch} />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div className="dropdown ml-4">
                        <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Sort by
                        </button>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">



                            <button className="dropdown-item" onClick={e => orderBy("1")}>Newest</button>
                            <button className="dropdown-item" onClick={e => orderBy("2")}>Oldest</button>
                            <button className="dropdown-item" onClick={e => orderBy("3")}>Price Low to High</button>
                            <button className="dropdown-item" onClick={e => orderBy("4")}>Price High to Low</button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default KeywordSortFilter