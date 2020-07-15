package io.spring.batch.listener;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

/**
 * Temos várias interfaces que podemos usar para criar listeners:
 * jobexecutionlistener, stepexecutionlistener, chunklistener, 
 * itemreaderlistener, itemprocessorlistener e itemwriterlistener
 */
public class JobListener implements JobExecutionListener {

	private JavaMailSender mailSender;

	public JobListener(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

	//Basicamente o que fazemos na interface é implementar esses dois
	//métodos
	@Override
	public void beforeJob(JobExecution jobExecution) {
		String jobName = jobExecution.getJobInstance().getJobName();

		SimpleMailMessage mail =
				getSimpleMailMessage(String.format("%s is starting", jobName),
						String.format("Per your request, we are informing you that %s is starting",
				jobName));

		mailSender.send(mail);
	}

	@Override
	public void afterJob(JobExecution jobExecution) {
		String jobName = jobExecution.getJobInstance().getJobName();

		SimpleMailMessage mail =
				getSimpleMailMessage(String.format("%s has completed", jobName),
						String.format("Per your request, we are informing you that %s has completed",
								jobName));

		mailSender.send(mail);
	}

	private SimpleMailMessage getSimpleMailMessage(String subject, String text) {
		SimpleMailMessage mail = new SimpleMailMessage();

		mail.setTo("douglasliralima@yahoo.com.br");
		mail.setSubject(subject);
		mail.setText(text);
		return mail;
	}
}
