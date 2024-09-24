<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">آخرین خبر</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                       
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">خانه</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="blog">وبلاگ</router-link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>