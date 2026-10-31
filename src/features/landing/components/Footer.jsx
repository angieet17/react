import React from 'react'
//rafc o rfc
export const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="md:col-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 md:mb-0 fg-2 text-decoration-none lh-1" aria-label="Bootstrap">
                            <svg className="bi" width="30" height="24" aria-hidden="true"><use href="#bootstrap"></use>
                            </svg>
                        </a>
                        <span className="mb-3 md:mb-0 fg-2">© 2026 Company, Inc</span>
                    </div>
                    <ul className="nav md:col-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="fg-2" href="#" aria-label="Instagram">
                                <svg className="bi" width="24" height="24" aria-hidden="true"><use href="#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="fg-2" href="#" aria-label="Facebook">
                                <svg className="bi" width="24" height="24"><use href="#facebook"></use></svg>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}
