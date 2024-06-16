import React from 'react';
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    dateOfBirth: Yup.object().shape({
        day: Yup.number().required("Day is required").typeError("Day is required"),
        month: Yup.number().required("Month is required").typeError("Month is required"),
        year: Yup.number().required("Year is required").typeError("Year is required"),
    })
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
];

const SignUpForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            dateOfBirth: {
                day: '',
                month: '',
                year: ''
            }
        },
        validationSchema,
        onSubmit: (values) => {
            const { day, month, year } = values.dateOfBirth;
            const dateOfBirth = `${year}-${month}-${day}`;
            values.dateOfBirth=dateOfBirth
            dispatch(registerUser(values))
            console.log(values);

        },
    });

    const handleDateChange = (name) => (event) => {
        formik.setFieldValue("dateOfBirth", {
            ...formik.values.dateOfBirth,
            [name]: event.target.value,
        });
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        name='fullName'
                        variant='outlined'
                        size='large'
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        type='password'
                        name='password'
                        variant='outlined'
                        size='large'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>Date</InputLabel>
                    <Select
                        name='day'
                        fullWidth
                        onChange={handleDateChange("day")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.day || ''}
                        error={formik.touched.dateOfBirth && formik.touched.dateOfBirth.day && Boolean(formik.errors.dateOfBirth?.day)}
                    >
                        {days.map((day) => <MenuItem key={day} value={day}>{day}</MenuItem>)}
                    </Select>
                    {formik.touched.dateOfBirth?.day && formik.errors.dateOfBirth?.day && (
                        <div style={{ color: 'red', fontSize: '0.75rem' }}>{formik.errors.dateOfBirth.day}</div>
                    )}
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>Month</InputLabel>
                    <Select
                        name='month'
                        fullWidth
                        onChange={handleDateChange("month")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.month || ''}
                        error={formik.touched.dateOfBirth && formik.touched.dateOfBirth.month && Boolean(formik.errors.dateOfBirth?.month)}
                    >
                        {months.map((month) => <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>)}
                    </Select>
                    {formik.touched.dateOfBirth?.month && formik.errors.dateOfBirth?.month && (
                        <div style={{ color: 'red', fontSize: '0.75rem' }}>{formik.errors.dateOfBirth.month}</div>
                    )}
                </Grid>
                <Grid item xs={4}>
                    <InputLabel>Year</InputLabel>
                    <Select
                        name='year'
                        fullWidth
                        onChange={handleDateChange("year")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.year || ''}
                        error={formik.touched.dateOfBirth && formik.touched.dateOfBirth.year && Boolean(formik.errors.dateOfBirth?.year)}
                    >
                        {years.map((year) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
                    </Select>
                    {formik.touched.dateOfBirth?.year && formik.errors.dateOfBirth?.year && (
                        <div style={{ color: 'red', fontSize: '0.75rem' }}>{formik.errors.dateOfBirth.year}</div>
                    )}
                </Grid>
                <Grid className='mt-20' item xs={12}>
                    <Button
                        sx={{ borderRadius: "20px", py: "15px", bgcolor: blue[500] }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        size='large'
                    >
                        SignUp
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignUpForm;
